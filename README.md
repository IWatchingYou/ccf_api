
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
  
```
CREATE TABLE hr.employees
(
  id integer NOT NULL DEFAULT nextval('hr.employee_id_seq'::regclass),
  staff_code character varying(4),
  branch_code character varying(255),
  name_eng character varying(255),
  name_khm character varying(255),
  gender character varying(1),
  marital_status character varying(30),
  dob timestamp without time zone,
  "location" character varying(30),
  department character varying(100),
  group_position character varying(100),
  "position" character varying(100),
  date_join timestamp without time zone,
  department_code character varying(3),
  location_code character varying(4),
  created_date timestamp without time zone,
  email character varying(50),
  first_name character varying(50),
  last_name character varying(50),
  active_stat boolean DEFAULT true,
  job_grade character(1),
  contact_number character varying(50),
  CONSTRAINT employee_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE hr.employees OWNER TO ccf;
```

```
CREATE TABLE hr.fmr_employees
(
  id integer,
  staff_code character varying(4),
  branch_code character varying(255),
  name_eng character varying(255),
  name_khm character varying(255),
  gender character varying(1),
  marital_status character varying(30),
  dob timestamp without time zone,
  "location" character varying(30),
  department character varying(100),
  group_position character varying(100),
  "position" character varying(100),
  date_join timestamp without time zone,
  department_code character varying(3),
  location_code character varying(4),
  created_date timestamp without time zone,
  email character varying(50),
  first_name character varying(50),
  last_name character varying(50),
  active_stat boolean,
  job_grade character(1),
  contact_number character varying(50)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE hr.fmr_employees OWNER TO ccf;
```

```
INSERT INTO hr.employees(
            id, staff_code, branch_code, name_eng, name_khm, gender, marital_status, 
            dob, "location", department, group_position, "position", date_join, 
            department_code, location_code, created_date, email, first_name, 
            last_name, active_stat, job_grade, contact_number)
    VALUES (454,"0004","SMC","Sarorn Theary","សារ៉ន  ធារី","F","Single","1994-03-12 00:00:00","Branch","Finance","Loan Admin Officer","Teller","2016-03-01 00:00:00","FN","SMC","2018-07-23 23:03:37.776249","","Theary","Sarorn",TRUE,"C","087 725 659"),
	   (453,"0003","SMC","Chen Sreytouch","ចេន  ស្រីទូច","F","Single","1991-08-20 00:00:00","Branch","Finance","Teller","Teller","2016-01-02 00:00:00","FN","SMC","2018-07-23 23:03:37.776249","sreytouch.chen@chokchey.net","Sreytouch","Chen",TRUE,"C","069/092 274 399"),
	   (455,"0005","HQ","Sry Rathana","ស្រ៊ី  រតនា","F","Married","1991-04-25 00:00:00","Head Office","Finance","Senior Department Officer","Senior Accounting Officer","2016-03-21 00:00:00","FN","FN","2018-07-23 23:03:37.776249","rathana.sry@chokchey.net","Rathana","Sry",TRUE,"F","010 712 627"),
	    (456,"0018","HQ","Lim Ratanak","លឹម រតនៈ","M","Married","1984-12-24 00:00:00","Head Office","Risk","Deputy Head of Department","Deputy Head of Credit Risk Department","2016-04-01 00:00:00","RSK","RSK","2018-07-23 23:03:37.776249","ratanak.lim@chokchey.net","Ratanak","Lim",TRUE,"H","016 620 766"),
	    (457,"0010","SMC","Phorn Yam","ផន  យ៉ាំ","F","Married","1983-03-02 00:00:00","Branch","Administration","Cleaner","Cleaner","2016-04-03 00:00:00","AD","SMC","2018-09-28 07:45:59.953","","Phorn","Yam",TRUE,"A","097 613 8667"),
     (459,"0012","SMC","Ya Nasy","យ៉ា ណាស៊ី","M","Single","1992-07-17 00:00:00","Branch","Credit","Senior Credit Officer","Senior Credit Officer","2017-02-01 00:00:00","CR","SMC","2018-07-23 23:03:37.776249","","Nasy","Ya",TRUE,"D","015 311 662"),
(460,"0100","HQ","Cheon Gil Park","បាក ឈិន ហ្គីល","M","Married","1972-11-12 00:00:00","Head Office","Executive","CEO","Chief Executive Officer","2017-03-01 00:00:00","CEO","CEO","2018-07-23 23:03:37.776249","gil.park@chokchey.net","Park","Gil",TRUE,"L","017 971 552"),
(461,"0017","HQ","Cheng Bunthoeun","ចេង ប៊ុនធឿន","M","Married","1983-02-02 00:00:00","Head Office","Risk","Head of Division","Head of Credit Risk Division","2017-03-15 00:00:00","RSK","RSK","2018-07-23 23:03:37.776249","bunthoeun.cheng@chokchey.net","Bunthoeun","Cheng",TRUE,"J","070 678 689"),
(462,"0019","HQ","Han Chanchumnor","ហាន ច័ន្ទជំនោ","M","Single","1989-10-03 00:00:00","Head Office","Human Resource","Deputy Head of Department","Deputy Head of HR Department","2017-04-10 00:00:00","HR","HR","2018-07-23 23:03:37.776249","chanchumnor.han@chokchey.net","Chanchumnor","Han",TRUE,"H","070 989 935"),
(463,"0020","HQ","Chuon Samnang","ជួន សំណាង","M","Single","1986-08-24 00:00:00","Head Office","Human Resource","Head of Department","Head of Recruitment Department","2017-04-24 00:00:00","HR","HR","2018-07-23 23:03:37.776249","samnang.chuon@chokchey.net","Samnang","Chuon",TRUE,"I","069 896 699"),
(464,"0022","HQ","Ly Sopichea","លី សុពិជា","M","Married","1986-05-21 00:00:00","Head Office","Credit","Head of Department","Head of SME Department","2017-05-22 00:00:00","CR","CR","2018-07-23 23:03:37.776249","sopichea.ly@chokchey.net","Sopichea","Ly",TRUE,"I","077 261 776"),
(465,"0023","HQ","Ouch Vanthib","អូច វណ្ណថីព","F","Single","1995-06-16 00:00:00","Head Office","Marketing","Department Officer","Marketing Officer","2017-05-22 00:00:00","MK","MK","2018-07-23 23:03:37.776249","vanthib.ouch@chokchey.net","Vanthib","Ouch",TRUE,"E","098 200 782"),
(466,"0027","HQ","Tea Khemara","ទា ខែមរ៉ា","M","Married","1983-04-16 00:00:00","Branch","Risk","Senior Department Officer","Senior Risk Officer","2017-06-02 00:00:00","RSK","RSK","2018-07-23 23:03:37.776249","khemara.tea@chokchey.net","Khemara","Tea",TRUE,"F","069 414 107"),
(467,"0024","TNTT","Lun Sokchea","លុន សុខជា","M","Married","1992-05-18 00:00:00","Branch","Credit","Branch Team Leader","Branch Team Leader","2017-06-02 00:00:00","CR","TNTT","2018-07-23 23:03:37.776249","","Sokchea","Lun",TRUE,"F","086 853 368"),
(468,"0029","TNTT","Suong Douch","សួង ដួច","M","Single","1992-05-18 00:00:00","Branch","Credit","Credit Officer","Credit Officer","2017-06-02 00:00:00","CR","TNTT","2018-07-23 23:03:37.776249","","Douch","Suong",TRUE,"C","093 492 133"),
(481,"0047","SMC","Phay Kosorika","ផៃ កុសុរិកា","F","Married","1984-11-18 00:00:00","Branch","Finance","Chief Teller","Chief Teller","2017-08-01 00:00:00","FN","SMC","2018-07-23 23:03:37.776249","kosorika.phay@chokchey.net","Kosorika","Phay",TRUE,"E","017 365 344"),
(480,"0049","HQ","Nem Manien","ណែម ម៉ានៀន","M","Married","1986-05-02 00:00:00","Head Office","Credit","Head of Department","Head of Retail Credit Department","2017-08-01 00:00:00","CR","CR","2018-07-23 23:03:37.776249","manien.nem@chokchey.net","Manien","Nem",TRUE,"I","016 797 947"),
(479,"0045","TNTT","To Kimheak","តូ គីមហៀក","F","Single","1999-05-29 00:00:00","Branch","Administration","Cleaner","Cleaner","2017-07-22 00:00:00","AD","TNTT","2018-11-05 03:02:14.014","","To","Kimheak",TRUE,"0",""),
(478,"0044","TKH","Chan Vichet","ចាន់​ វិចិត្រ","M","Single","1988-05-03 00:00:00","Branch","Credit","Credit Officer","Credit Officer","2017-07-18 00:00:00","CR","TKH","2018-07-23 23:03:37.776249","","Vichet","Chan",TRUE,"C","011 944 464"),
(477,"0043","TK","Sea Leakhena","សៀ លក្ខិណា","F","Married","1990-11-09 00:00:00","Branch","Finance","Chief Teller","Chief Teller","2017-07-17 00:00:00","FN","TK","2018-07-23 23:03:37.776249","leakhena.sea@chokchey.net","Leakhena","Sea",TRUE,"E","017/012 957 856"),
(476,"0042","TK","Phan Sovat","ផន សុវត្តិ","M","Single","1993-03-15 00:00:00","Branch","Credit","Senior Credit Officer","Senior Credit Officer","2017-07-10 00:00:00","CR","TK","2018-07-23 23:03:37.776249","","Sovat","Phan",TRUE,"D","070 772 402"),
(475,"0033","KPS","Lang Rino","ឡាង​ រីណូ","M","Single","1994-07-08 00:00:00","Branch","Credit","SME Officer","SME Officer","2017-07-03 00:00:00","CR","KPS","2018-07-23 23:03:37.776249","","Rino","Lang",TRUE,"D","081 212 802"),
(474,"0035","TK","Sa Rifar","សា រីហ្វាស់","F","Single","1991-11-09 00:00:00","Branch","Finance","Teller","Teller","2017-07-03 00:00:00","FN","TK","2018-07-23 23:03:37.776249","","Rifar","Sa",TRUE,"C","098 896 662"),
(473,"0036","TKH","Choeun Samnang","ជឿន​ សំណាង","M","Single","1991-09-04 00:00:00","Branch","Credit","Senior Credit Officer","Senior Credit Officer","2017-07-03 00:00:00","CR","TKH","2018-07-23 23:03:37.776249","","Samnang","Choeun",TRUE,"D","010 665 162"),
(472,"0039","TKH","Khim Sopheaktra","ឃឹម​ សុភត្រា","M","Single","1984-02-10 00:00:00","Branch","Credit","Branch Team Leader","Branch Team Leader","2017-07-03 00:00:00","CR","TKH","2018-07-23 23:03:37.776249","sopheaktra.khim@chokchey.net","Sopheaktra","Khim",TRUE,"F","012 876 860/081 991 899"),
(471,"0034","SMC","Tan Sokchea","តាន់ សុខជា","F","Single","1997-03-18 00:00:00","Branch","Finance","Teller","Teller","2017-07-03 00:00:00","FN","SMC","2018-07-23 23:03:37.776249","","Sokchea","Tan",TRUE,"C","010 813 938"),
(469,"0031","TKH","Keo Chhunly","កែវ ឈុនលី","M","Single","1994-06-17 00:00:00","Branch","Credit","Credit Officer","Credit Officer","2017-06-14 00:00:00","CR","TKH","2018-07-23 23:03:37.776249","","Chhunly","Keo",TRUE,"C","087 277 268"),
(482,"0052","TK","Pen Thach","ប៉ែន​ ថាច","M","Married","1987-09-06 00:00:00","Branch","Credit","Branch Manager","Branch Manager","2017-08-01 00:00:00","CR","TK","2018-07-23 23:03:37.776249","thach.pen@chokchey.net","Thach","Pen",TRUE,"G","089 923 288"),
(484,"0054","HQ","Deth Socheath","ដេត សុជាតិ","F","Married","1982-10-04 00:00:00","Head Office","Human Resource","Head of Division","Head of HR and Marketing Division","2017-08-07 00:00:00","HR","HR","2018-07-23 23:03:37.776249","socheath.deth@chokchey.net","Socheath","Deth",TRUE,"J","012 267 123"),
(485,"0062","TNTT","Mach Rany","ម៉ាច​ រ៉ានី","M","Married","1985-04-17 00:00:00","Branch","Credit","Branch Manager","Branch Manager","2017-08-25 00:00:00","CR","TNTT","2018-07-23 23:03:37.776249","rany.mach@chokchey.net","Rany","Mach",TRUE,"G","093 750 603"),
(486,"0070","SMC","Eng Savin","អេង សាវិន្ធ","M","Single","1995-05-17 00:00:00","Branch","Credit","Junior Credit Officer","Junior Credit Officer","2017-09-04 00:00:00","CR","SMC","2018-07-23 23:03:37.776249","","Savin","Eng",TRUE,"B","010 276 740"),
(487,"0069","TNTT","Tum Vireak","ទុំ វីរៈ","M","Single","1992-05-03 00:00:00","Branch","Credit","Branch Team Leader","Branch Team Leader","2017-09-04 00:00:00","CR","TNTT","2018-07-23 23:03:37.776249","vireak.tum@chokchey.net","Vireak","Tum",TRUE,"F","016 832 446"),
(488,"0075","TKH","Choub Munny","ជួប មុនី","M","Single","1983-11-23 00:00:00","Branch","Finance","Teller","Teller","2017-09-04 00:00:00","FN","TKH","2018-07-23 23:03:37.776249","munny.choub@chokchey.net","Munny","Choub",TRUE,"C","012 853 956/096 393 511 5"),
(493,"0066","TNTT","Pho Vuthy","ផូ វុធី","M","Single","1995-03-04 00:00:00","Branch","Credit","Credit Officer","Credit Officer","2017-09-04 00:00:00","CR","TNTT","2018-07-23 23:03:37.776249","","Vuthy","Pho",TRUE,"C","093 930 868"),
(492,"0065","TNTT","Hak Bunheang","ហាក់ ប៊ុនហៀង","M","Married","1991-12-11 00:00:00","Branch","Credit","Branch Team Leader","Branch Team Leader","2017-09-04 00:00:00","CR","TNTT","2018-07-23 23:03:37.776249","bunheang.hak@chokchey.net","Bunheang","Hak",TRUE,"F","016 824 811"),
(491,"0072","TK","Teng Sokneang","តេង សុខនាង","M","Single","1991-06-07 00:00:00","Branch","Finance","Security Guard","Security Guard","2017-09-04 00:00:00","FN","TK","2018-07-23 23:03:37.776249","","Sokneang","Teng",TRUE,"A","096 729 222 3/071 888 177 8"),
(490,"0068","TK","Vorng Ratanak","វង រតនៈ","M","Single","1994-11-07 00:00:00","Branch","Credit","Credit Officer","Credit Officer","2017-09-04 00:00:00","CR","TK","2018-07-23 23:03:37.776249","","Ratanak","Vorng",TRUE,"C","096 3402 005"),
(489,"0063","TK","Khat Chandy","ខាត់ ចាន់ឌី","M","Married","1990-07-18 00:00:00","Branch","Credit","Branch Team Leader","Branch Team Leader","2017-09-04 00:00:00","CR","TK","2018-07-23 23:03:37.776249","chandy.khat@chokchey.net","Chandy","Khat",TRUE,"F","070 508 156")
     ;
```

```
INSERT INTO hr.employees(
            id, staff_code, branch_code, name_eng, name_khm, gender, marital_status, 
            dob, "location", department, group_position, "position", date_join, 
            department_code, location_code, created_date, email, first_name, 
            last_name, active_stat, job_grade, contact_number)
    VALUES (521,"0108","TKH","Hong Heang","ហុង ហ៊ាង","M","Married","1985-01-12 00:00:00","Branch","Credit","Branch Team Leader","Branch Team Leader","2018-02-01 00:00:00","CR","TKH","2018-07-23 23:03:37.776249","heang.hong@chokchey.net","Heang","Hong",FALSE,"",""),
(458,"0011","HQ","Mao Sotheary","ម៉ៅ សុធារី","F","Married","1979-09-06 00:00:00","Head Office","Finance","Head of Department","Head of Finance and Administration Department","2016-12-19 00:00:00","FN","FN","2018-07-23 23:03:37.776249","sotheary.mao@chokchey.net","Sotheary","Mao",FALSE,"",""),
(541,"0134","TNTT","You Rina","យូ រីណា","M","Single","1996-04-12 00:00:00","Branch","Credit","Credit Officer","Credit Officer","2018-03-26 00:00:00","CR","TNTT","2018-07-23 23:03:37.776249","","Rina","You",FALSE,"",""),
(550,"0145","TK","Chhin Tev","ឈិន​ តេវ","M","Single","1990-01-10 00:00:00","Branch","Credit","Credit Officer","Credit Officer","2018-04-18 00:00:00","CR","TK","2018-07-23 23:03:37.776249","","Tev","Chhin",FALSE,"",""),
(470,"0041","HQ","Pov Samrach","ពៅ សំរេច","M","Married","1983-12-10 00:00:00","Head Office","Audit","Head of Division","Head of Internal Audit Division","2017-07-03 00:00:00","IA","IA","2018-07-23 23:03:37.776249","samrach.pov@chokchey.net","Samrach","Pov",FALSE,"",""),
(529,"0118","HQ","Choem Boroth","ជឹម បូរ័ត្ន","M","Married","1989-06-07 00:00:00","Head Office","Finance","Unit Manager","Administration Unit Manager","2018-03-01 00:00:00","FN","FN","2018-07-23 23:03:37.776249","boroth.choem@chokchey.net","Boroth","Choem",FALSE,"",""),
(551,"0147","HQ","Eam Panha","អៀម បញ្ញា","M","Single","1998-07-08 00:00:00","Head Office","Finance","Department Officer","Administration Officer","2018-04-18 00:00:00","FN","FN","2018-07-23 23:03:37.776249","panha.eam@chokchey.net","Panha","Eam",FALSE,"",""),
(523,"0113","TKH","Hum Viroth","ហ៊ុំ វិរោត","M","Single","1994-01-01 00:00:00","Branch","Finance","Security Guard","Security Guard","2018-02-12 00:00:00","FN","TKH","2018-07-23 23:03:37.776249","","Viroth","Hum",FALSE,"",""),
(483,"0050","TK","Chea Sok","ជា សុខ","M","Married","1987-08-20 00:00:00","Branch","Credit","Senior Credit Officer","Senior Credit Officer","2017-08-01 00:00:00","CR","TK","2018-07-23 23:03:37.776249","","Sok","Chea",FALSE,"",""),
(555,"0150","TKH","Sary Piseth","សារី ពិសដ្ឋ","M","Single","1996-01-17 00:00:00","Branch","Credit","Senior Credit Officer","Senior Credit Officer","2018-05-07 00:00:00","CR","TKH","2018-07-23 23:03:37.776249","","Piseth","Sary",FALSE,"",""),
(590,"0186","TKH","Theng Pudthan","ថេង ពុដ្ឋាន","M","Single","1993-04-03 00:00:00","Branch","Credit","Senior Credit Officer","Senior Credit Officer","2018-07-18 00:00:00","CR","TKH","2018-07-23 23:03:37.776249","","Pudthan","Theng",FALSE,"",""),
(509,"0090","HQ","Pheng Pheak","ផេង ភ័ក្ត","M","Married","1981-02-01 00:00:00","Head Office","Finance","Head of Division","Head of Finance and Administration Division","2017-12-01 00:00:00","FN","FN","2018-07-23 23:03:37.776249","pheak.pheng@chokchey.net","Pheak","Pheng",FALSE,"","");
```
