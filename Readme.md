## 手順

```bash
yarn add sqlite3 sequelize 

yarn add sequelize-cli -D

yarn sequelize model:generate --name Page1Data --attributes select_id1:integer,select_id2:integer,select_id3:integer,select_id4:integer,text_id3:string,text_id4:string
```

* マイグレーション実行
```bash
yarn sequelize db:migrate
```