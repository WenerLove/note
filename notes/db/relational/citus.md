# Citus

* [Microsoft Acquires Citus Data](https://www.citusdata.com/blog/2019/01/24/microsoft-acquires-citus-data/)
  * [HN](https://news.ycombinator.com/item?id=18990469)

  http://docs.citusdata.com/en/stable/

https://hub.docker.com/r/citusdata/citus/

https://www.citusdata.com/
https://docs.citusdata.com/en/stable/index.html

https://docs.citusdata.com/en/stable/reference/user_defined_functions.html



http://docs.citusdata.com/en/master/admin_guide/cluster_management.html


```
brew install citus

echo "shared_preload_libraries = 'citus'" >> postgresql.conf
```

* 跨节点不支持
Window Functions
CTEs
Set operations
Transactional semantics for queries that span across multiple shards

When to use
https://docs.citusdata.com/en/stable/aboutcitus/what_is_citus.html#when-to-use-citus

Inappropriate
Traditional data warehousing with long, free-form SQL
Many distributed transactions across multiple shards
Queries that return data-heavy ETL results rather than summaries


https://github.com/citusdata/cstore_fdw


```bash
# 依赖于 protobuf-c
# 确保 pg_config 在 PATH 中

git clone https://github.com/citusdata/cstore_fdw
cd cstore_fdw 
make install
# /bin/sh /usr/local/lib/postgresql/pgxs/src/makefiles/../../config/install-sh -c -d '/usr/local/lib/postgresql'
# /bin/sh /usr/local/lib/postgresql/pgxs/src/makefiles/../../config/install-sh -c -d '/usr/local/share/postgresql/extension'
# /bin/sh /usr/local/lib/postgresql/pgxs/src/makefiles/../../config/install-sh -c -d '/usr/local/share/postgresql/extension'
# /usr/bin/install -c -m 755  cstore_fdw.so '/usr/local/lib/postgresql/cstore_fdw.so'
# /usr/bin/install -c -m 644 .//cstore_fdw.control '/usr/local/share/postgresql/extension/'
# /usr/bin/install -c -m 644 .//cstore_fdw--1.6.sql .//cstore_fdw--1.5--1.6.sql .//cstore_fdw--1.4--1.5.sql .//cstore_fdw--1.3--1.4.sql .//cstore_fdw--1.2--1.3.sql .//cstore_fdw--1.1--1.2.sql .//cstore_fdw--1.0--1.1.sql  '/usr/local/share/postgresql/extension/'

# mac
cp cstore_fdw.so /usr/local/lib/postgresql/

echo "shared_preload_libraries = 'cstore_fdw'" >> postgresql.conf


g clone https://github.com/citusdata/pg_cron

```

```sql
-- load extension first time after install
CREATE EXTENSION cstore_fdw;

-- create server object
CREATE SERVER cstore_server FOREIGN DATA WRAPPER cstore_fdw;

-- create foreign table
CREATE FOREIGN TABLE customer_reviews
(
    customer_id TEXT,
    review_date DATE,
    review_rating INTEGER,
    review_votes INTEGER,
    review_helpful_votes INTEGER,
    product_id CHAR(10),
    product_title TEXT,
    product_sales_rank BIGINT,
    product_group TEXT,
    product_category TEXT,
    product_subcategory TEXT,
    similar_product_ids CHAR(10)[]
)
SERVER cstore_server
OPTIONS(compression 'pglz');

COPY customer_reviews FROM '/home/user/customer_reviews_1998.csv' WITH CSV;
COPY customer_reviews FROM '/home/user/customer_reviews_1999.csv' WITH CSV;

ANALYZE customer_reviews;

-- Find all reviews a particular customer made on the Dune series in 1998.
SELECT
    customer_id, review_date, review_rating, product_id, product_title
FROM
    customer_reviews
WHERE
    customer_id ='A27T7HVDXA3K2A' AND
    product_title LIKE '%Dune%' AND
    review_date >= '1998-01-01' AND
    review_date <= '1998-12-31';

-- Do we have a correlation between a book's title's length and its review ratings?
SELECT
    width_bucket(length(product_title), 1, 50, 5) title_length_bucket,
    round(avg(review_rating), 2) AS review_average,
    count(*)
FROM
   customer_reviews
WHERE
    product_group = 'Book'
GROUP BY
    title_length_bucket
ORDER BY
    title_length_bucket;



DROP FOREIGN TABLE cstore_table_n;

DROP SERVER cstore_server;
DROP EXTENSION cstore_fdw;
```


http://docs.citusdata.com/en/stable/installation/single_machine_docker.html

https://raw.githubusercontent.com/citusdata/docker/master/docker-compose.yml

```yaml
version: '2.1'

services:
  master:
    container_name: "${COMPOSE_PROJECT_NAME:-citus}_master"
    image: 'citusdata/citus:9.2.2'
    ports: ["${MASTER_EXTERNAL_PORT:-5432}:5432"]
    labels: ['com.citusdata.role=Master']
  worker:
    image: 'citusdata/citus:9.2.2'
    labels: ['com.citusdata.role=Worker']
    depends_on: { manager: { condition: service_healthy } }
  manager:
    container_name: "${COMPOSE_PROJECT_NAME:-citus}_manager"
    image: 'citusdata/membership-manager:0.2.0'
    volumes: ['/var/run/docker.sock:/var/run/docker.sock']
    depends_on: { master: { condition: service_healthy } }
```

```sql
SELECT * FROM master_get_active_worker_nodes();
```

## Citus MX
http://docs.citusdata.com/en/stable/arch/mx.html

* hash-distributed tables from any node
* direct reading and writing from worker nodes
* 不支持所有命令
  * DDL commands.
  * Citus Utility Functions that change Citus metadata.
  * Queries accessing append distributed tables.
* 不支持 FDW
* seerial 列必须为 bigserial
