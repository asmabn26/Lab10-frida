Java.perform(function () {
  console.log("[+] Hook SQLite charg?");

  var SQLiteDatabase = Java.use("android.database.sqlite.SQLiteDatabase");

  SQLiteDatabase.execSQL.overload("java.lang.String").implementation = function (sql) {
    console.log("[SQLite][execSQL] " + sql);
    return this.execSQL(sql);
  };

  SQLiteDatabase.rawQuery.overload("java.lang.String", "[Ljava.lang.String;").implementation = function (sql, args) {
    console.log("[SQLite][rawQuery] " + sql);
    return this.rawQuery(sql, args);
  };
});
