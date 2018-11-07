
# Micro service for Employee Directory

This is the api for employee directory

```
pm2 --name api-emp start npm -- start
```


## Configure

  * install package 
  ```
    $ npm install
  ```

  * run `nodemon`
  ```
    $ nodemon
  ```

  * if error please do it
  ```
    $ npm instal --save nodemon
    $ nodemon
  ```

  * connect database in folder `./config/config.json`
  ```
    {
      "development": {
        "username": "sample",
        "password": "123123",
        "database": "sample",
        "host": "localhost",
        "dialect": "postgres"
      },
      "test": {
        "username": "sample",
        "password": "123123",
        "database": "sample",
        "host": "localhost",
        "dialect": "postgres"
      },
      "production": {
        "username": "sample",
        "password": "123123",
        "database": "sample",
        "host": "localhost",
        "dialect": "postgres"
      }
    }
  ```

## API Documents

  * `BASEURL` : [http://localhost:3000/api/](http://localhost:3000/api/)

  * ENDPOIONT :

  | endpoint | parameter | type | description |
  | -------- | --------- | ---- | ----------- |
  | employees|           |      | GET all employees |
  | employee | @name_eng, @name_khm, @gender, @marital_status, @dob, @location, @department, @group_position, @position, @date_join, @department_code, @location_code, @email, @first_name, @last_name, @active_stat| body | POST new employees |
  | employees/:id| @id   | params | GET data employee by id|
  | employee | @name | query | GET data employee by english name|
  | employees/:id | @id, @name_eng, @name_khm, @gender, @marital_status, @dob, @location, @department, @group_position, @position, @date_join, @department_code, @location_code, @email, @first_name, @last_name, @active_stat | params (id), body| PUT data employee by id |
  | employees/:id | @id | params | DELTE data employee by id |
  | department | | | GET data department |
  | department_code | | | GET data department code |
  | location | | | GET data location |
  | location_code | | | GET data location code |
  | position | | | GET data position |
  | group_position | | | GET data group position |
  | branch | | | GET data branch |
  | countemp | | | GET data count staff code last number |
  | upload/:id | @id | params | POST upload image employee by id |
  