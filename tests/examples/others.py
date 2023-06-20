from tests.context import spark
from pyspark.sql import functions as F


df = spark.createDataFrame([], schema="struct<a:double, b:double, name:string>")
df2 = spark.createDataFrame([], schema="struct<c:double, d:double, name:string>")
df3 = spark.createDataFrame([], schema="struct<summary:string, name:string>")
df4 = df3.withColumn("a", F.length(df3.name)).groupBy("summary", "name").agg(F.min("a"))

df = df.agg(F.min(df.a))
df = df.alias("df_as_1")
df = df.coalesce(2)
df = df.select(df.colRegex("`.+`"))
df = df.crossJoin(df2.select("name"))
# df = df.crosstab("name", "min(a)")
df = df.describe(["name"])
df = df.distinct()
df = df.drop("min(a)")
df = df.dropDuplicates(["name"]).drop_duplicates(["name"])
df = df.dropna()
df = df.exceptAll(df3)
df = df.fillna(False)
df = df.filter(df.name != None)
# df = df.freqItems(["name"], .5)
df = df.intersect(df3)
df = df.intersectAll(df3)
df = df.limit(5)
#df = df.localCheckpoint(True)
df = df.orderBy("name")
df = df.randomSplit([.5, .5])[0]
df = df.repartition(10)
df = df.repartition(10, "name")
df = df.replace("old", "new")
df = df.withColumn("a", F.length(df.name))
df = df.rollup("name", "summary").agg(F.min(df.a))
df = df.sample(withReplacement=True, fraction=0.5, seed=3)
# name: string, summary: string, min(a): int
df = df.sampleBy("name", fractions={0: 0.1, 1: 0.2}, seed=0)
df = df.selectExpr("*")
df = df.sortWithinPartitions("name", ascending=False)
df = df.subtract(df4)
df = df.toDF("name", "summary", "min_a")
df = df.drop("min_a").union(df3)
df = df.unionAll(df3).unionByName(df3)
df = df.where(F.length(df.name) > 3)
df = df.withColumnRenamed("name", "the_name")
df = df.withColumn("a", F.length(df.the_name))
df = df.select('the_name', F.timestamp_seconds(df.a).alias('time')).withWatermark('time', '10 minutes')

df.select("*").explain(True)



"""
dir(Dataframe):

 'agg':                                   done
 'alias':                                 done
 'approxQuantile':                        not a transformation
 'cache':                                 not a transformation
 'checkpoint':                            not a transformation
 'coalesce':                              done
 'colRegex':                              done
 'collect':                               not a transformation
 'columns':                               not a transformation
 'corr':                                  not a transformation
 'count':                                 not a transformation
 'cov':                                   not a transformation
 'createGlobalTempView':                  not a transformation
 'createOrReplaceGlobalTempView':         not a transformation
 'createOrReplaceTempView':               not a transformation
 'createTempView':                        not a transformation
 'crossJoin':                             done
 'crosstab':                              done
 'cube':                                  doesn't return a Dataframe
 'describe':                              done
 'distinct':                              done
 'drop':                                  done
 'dropDuplicates':                        done
 'drop_duplicates':                       done
 'dropna':                                done
 'dtypes':                                not a transformation
 'exceptAll':                             done
 'explain':                               not a transformation
 'fillna':                                done
 'filter':                                done
 'first':                                 not a transformation
 'foreach':                               not a transformation
 'foreachPartition':                      not a transformation
 'freqItems':                             it's an aggregate
 'groupBy':                               done
 'groupby':                               done
 'head':                                  not a transformation
 'hint':                                  ??
 'inputFiles':                            not a transformation
 'intersect':                             done
 'intersectAll':                          done
 'isEmpty':                               not a transformation
 'isLocal':                               not a transformation
 'isStreaming':                           not a transformation
 'is_cached':                             not a transformation
 'join':                                  done
 'limit':                                 done
 'localCheckpoint':                       works...
 'mapInArrow':                            not supported?
 'mapInPandas':                           not supported?
 'melt':                                  ??
 'na':                                    ??
 'observe':                               ??
 'orderBy':                               done
 'pandas_api':                            ??
 'persist':                               ??
 'printSchema':                           not a transformation
 'randomSplit':                           done
 'rdd':                                   not a transformation
 'registerTempTable':                     not a transformation
 'repartition':                           done
 'repartitionByRange':                    done
 'replace':                               done
 'rollup':                                done
 'sameSemantics':                         not a transformation
 'sample':                                done
 'sampleBy':                              done
 'schema':                                not a transformation
 'select':                                done
 'selectExpr':                            done
 'semanticHash':                          not a transformation
 'show':                                  not a transformation
 'sort':                                  done
 'sortWithinPartitions':                  done
 'sparkSession':                          not a transformation
 'sql_ctx':                               not a transformation
 'stat':                                  not a transformation
 'storageLevel':                          not a transformation
 'subtract':                              done
 'summary':                               not a transformation
 'tail':                                  not a transformation
 'take':                                  not a transformation
 'to':                                    ??
 'toDF':                                  done
 'toJSON':                                not a transformation
 'toLocalIterator':                       not a transformation
 'toPandas':                              not supported
 'to_koalas':                             not supported
 'to_pandas_on_spark':                    not supported
 'transform':                             WHAT TO DO HERE??
 'union':                                 done
 'unionAll':                              done
 'unionByName':                           done
 'unpersist':                             not a transformation
 'unpivot':                               ??
 'where':                                 done (filter)
 'withColumn':                            done
 'withColumnRenamed':                     done
 'withColumns':                           not in the api
 'withColumnsRenamed':                    not in the api
 'withMetadata':                          not in the api
 'withWatermark':                         works...
 'write':                                 not a transformation
 'writeStream':                           not a transformation
 'writeTo':                               not a transformation
"""