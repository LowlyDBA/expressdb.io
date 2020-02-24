(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{213:function(e,t,a){"use strict";a.r(t);var s=a(28),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"size-limitations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#size-limitations"}},[e._v("#")]),e._v(" Size Limitations")]),e._v(" "),a("p",[e._v("One of the reasons Microsoft is able to give SQL Server Express away for free is\nbecause of the limits imposed on certain facets of the server. One of the largest\nlimitations of SQL Server Express is the restriction on individual database sizes.\nNo single database can be over 10GB on modern versions. This restriction has been in place for over a decade\nand has not increased over time, even as modern data storage has become extremely\ncheap and plentiful.")]),e._v(" "),a("p",[e._v("Even if an application doesn't require storing 10GB of data immediately, over years\nof use it is not uncommon for a database to hit the ceiling on its size. When SQL\nServer Express is bundled with software, this can result in customer support calls and\nperformance degradation for end users.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/sql-express.png",alt:"SQL Server Express"}})]),e._v(" "),a("h2",{attrs:{id:"how-to-work-around-sql-server-express-s-data-limit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-work-around-sql-server-express-s-data-limit"}},[e._v("#")]),e._v(" How to Work Around SQL Server Express's Data Limit")]),e._v(" "),a("h3",{attrs:{id:"compression"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compression"}},[e._v("#")]),e._v(" Compression")]),e._v(" "),a("p",[e._v("In SQL Server 2016 SP1+, Express versions can utilize "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/relational-databases/data-compression/data-compression?view=sql-server-ver15",target:"_blank",rel:"noopener noreferrer"}},[e._v("data compression"),a("OutboundLink")],1),e._v(" on indexes and tables to increase the size of a database on disk. Generally, the additional CPU required to decompress data that is read from disk is a worthwhile trade off for larger tables and indexes.")]),e._v(" "),a("h3",{attrs:{id:"design-smart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design-smart"}},[e._v("#")]),e._v(" Design Smart")]),e._v(" "),a("p",[e._v("Commonly, databases are created using generic data types that may provide flexibility, but\nalso come at the cost of an increased storage footprint. By assessing the below options,\na database can take up a fraction of its original size without sacrificing any actual data.")]),e._v(" "),a("p",[e._v("This advice is meant to be general and should always be assessed in the context of\nthe specific use case at hand.")]),e._v(" "),a("h4",{attrs:{id:"integers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integers"}},[e._v("#")]),e._v(" Integers")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/data-types/int-bigint-smallint-and-tinyint-transact-sql",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("INT")]),a("OutboundLink")],1),e._v(" is a common data type for IDs and whole-number numeric data. With a size of 4 bytes, it isn't very big but can support numbers up to 2,147,483,647. However if it is clear that the\nvalue being captured is never going to hit anywhere near that limit, using a "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/data-types/int-bigint-smallint-and-tinyint-transact-sql",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("SMALLINT")]),a("OutboundLink")],1),e._v(" for values up to 32,767 (2 bytes) or "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/data-types/int-bigint-smallint-and-tinyint-transact-sql",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("TINYINT")]),a("OutboundLink")],1),e._v(" for values up to 255 (1 byte) can drastically reduce storage space. All of these types are available in SQL 2008+")]),e._v(" "),a("p",[e._v("For example, a table "),a("code",[e._v("[dbo].[state]")]),e._v(" may provide a list of all 50 states in the US.\nCommonly the ID for this table will be an "),a("code",[e._v("INT")]),e._v(" data type, but since it is unlikely\nthere will be 200+ new states any time soon, it is safe to use a "),a("code",[e._v("TINYINT")]),e._v(" instead and\nreduce the ID column's footprint to 25% of its original value.")]),e._v(" "),a("h4",{attrs:{id:"date-and-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date-and-time"}},[e._v("#")]),e._v(" Date and Time")]),e._v(" "),a("p",[e._v("Similarly to integers, often times date and time datatypes are chosen that provide\nfar more detail than necessary. While some use cases necessitate the capturing of\nmilliseconds, many times precision more than a second is just excessive and provides\nno benefit to an application, yet takes up more disk space. Be sure that each type is not defaulting to a higher precision than is needed, also.")]),e._v(" "),a("p",[e._v("There are many options for date, time, and datetime values, so assess what makes the most sense for each situation and use the smallest available:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Data Type")]),e._v(" "),a("th",[e._v("Accuracy")]),e._v(" "),a("th",[e._v("Size")]),e._v(" "),a("th",[e._v("Compatibility")]),e._v(" "),a("th",[e._v("Example")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/data-types/date-transact-sql",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("DATE")]),a("OutboundLink")],1)]),e._v(" "),a("td",[e._v("One day")]),e._v(" "),a("td",[e._v("3 bytes")]),e._v(" "),a("td",[e._v("2008+")]),e._v(" "),a("td",[e._v("2018-04-02")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/data-types/datetime-transact-sql",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("DATETIME")]),a("OutboundLink")],1)]),e._v(" "),a("td",[e._v("Rounded to increments of .000, .003, .007 sec")]),e._v(" "),a("td",[e._v("8 bytes")]),e._v(" "),a("td",[e._v("2008+")]),e._v(" "),a("td",[e._v("2018-04-02 12:35:29.123")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/data-types/datetime2-transact-sql",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("DATETIME2")]),a("OutboundLink")],1)]),e._v(" "),a("td",[e._v("100 nanoseconds")]),e._v(" "),a("td",[e._v("6 bytes for precisions < 3; 7 bytes for precisions 3 & 4; all others are 8 bytes")]),e._v(" "),a("td",[e._v("2008+")]),e._v(" "),a("td",[e._v("2018-04-02 12:35:29.1234567")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/data-types/datetimeoffset-transact-sql",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("DATETIMEOFFSET")]),a("OutboundLink")],1)]),e._v(" "),a("td",[e._v("100 nanoseconds")]),e._v(" "),a("td",[e._v("8-10 bytes")]),e._v(" "),a("td",[e._v("2008+")]),e._v(" "),a("td",[e._v("2018-04-02 12:35:29.1234567 +12:15")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/data-types/smalldatetime-transact-sql",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("SMALLDATETIME")]),a("OutboundLink")],1)]),e._v(" "),a("td",[e._v("One minute")]),e._v(" "),a("td",[e._v("4 bytes")]),e._v(" "),a("td",[e._v("2008+")]),e._v(" "),a("td",[e._v("2018-04-02 12:35:00")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/data-types/time-transact-sql",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("TIME")]),a("OutboundLink")],1)]),e._v(" "),a("td",[e._v("Varies")]),e._v(" "),a("td",[e._v("3-5 bytes")]),e._v(" "),a("td",[e._v("2008+")]),e._v(" "),a("td",[e._v("12:35:29.1234567")])])])]),e._v(" "),a("h4",{attrs:{id:"decimals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decimals"}},[e._v("#")]),e._v(" Decimals")]),e._v(" "),a("p",[e._v("Similar to dates and integers, making sure only the precision necessary is being stored\nwhen dealing with "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/data-types/decimal-and-numeric-transact-sql",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("DECIMAL")]),e._v(" and "),a("code",[e._v("NUMERIC")]),a("OutboundLink")],1),e._v(" (functionally equivalent data types) is very important.")]),e._v(" "),a("p",[e._v("For most cases, a precision of 9 or less will suffice, which means "),a("code",[e._v("DECIMAL")]),e._v(" will only take up 5 bytes. However, if more is required, the following sizes will apply:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Precision")]),e._v(" "),a("th",[e._v("Size")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1-9")]),e._v(" "),a("td",[e._v("5 bytes")])]),e._v(" "),a("tr",[a("td",[e._v("10-19")]),e._v(" "),a("td",[e._v("9 bytes")])]),e._v(" "),a("tr",[a("td",[e._v("20-28")]),e._v(" "),a("td",[e._v("13 bytes")])]),e._v(" "),a("tr",[a("td",[e._v("29-38")]),e._v(" "),a("td",[e._v("17 bytes")])])])]),e._v(" "),a("p",[e._v("It may be tempting to consider the "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/data-types/float-and-real-transact-sql",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("FLOAT")]),e._v(" or "),a("code",[e._v("REAL")]),a("OutboundLink")],1),e._v(" types as well, since they can store a precision of 7 digits in 4 bytes and 15 digits in 8 bytes. However, it is integral to remember that these types are "),a("em",[e._v("floating point numerics")]),e._v(" and thus contain approximate values. Unless floating point numbers are a specific requirement, using these types can lead to rounding issues and are certainly not worth the risk for space savings.")]),e._v(" "),a("h4",{attrs:{id:"strings-and-varchars"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strings-and-varchars"}},[e._v("#")]),e._v(" Strings and VARCHARs")]),e._v(" "),a("p",[e._v("Another easy way to slim down a database is choosing the right character data type format.\n"),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/data-types/nchar-and-nvarchar-transact-sql",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("NVARCHAR")]),a("OutboundLink")],1),e._v(" and "),a("code",[e._v("NCHAR")]),e._v(" store Unicode data, and are thus must-haves for storing any multilingual or localized data. Conversely, "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/data-types/char-and-varchar-transact-sql",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("VARCHAR")]),a("OutboundLink")],1),e._v(" and "),a("code",[e._v("CHAR")]),e._v(" store non-Unicode data and only take 1 byte for every 2 bytes that "),a("code",[e._v("NVARCHAR")]),e._v(" takes up. This can effectively cut a table's size in half if it is comprised mostly of a large string column, like a comment or note field.")]),e._v(" "),a("p",[e._v('So, a simple "Hello" in '),a("code",[e._v("NVARCHAR")]),e._v(" will be 10 bytes but only 5 in "),a("code",[e._v("VARCHAR")]),e._v(". The difference can be huge for not only performance, but also storage, when strings are properly typed.")]),e._v(" "),a("h3",{attrs:{id:"use-multiple-databases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-multiple-databases"}},[e._v("#")]),e._v(" Use Multiple Databases")]),e._v(" "),a("p",[e._v("While each "),a("em",[e._v("individual")]),e._v(" database has a size restriction, the number of databases\nin an instance is not limited any more than other versions. This leaves room to\npartition data horizontally or vertically into several databases.")]),e._v(" "),a("h4",{attrs:{id:"horizontal-partitioning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#horizontal-partitioning"}},[e._v("#")]),e._v(" Horizontal Partitioning")]),e._v(" "),a("p",[e._v("Horizontal partitioning refers to slicing data by putting rows into different tables (and databases, in this case). The tables in each database will be the same, but contain different\nsets of data based on a logical grouping, like location.")]),e._v(" "),a("p",[e._v("If a database contains data for all customers across the United States, but the data exceeds\n10GB, an option would be to create databases for regions, i.e. Northwest, Northeast, etc. and\nsplit the data across them.")]),e._v(" "),a("p",[e._v("The downside to this approach is that there are now N number of identical databases to manage when it comes to upgrades, maintenance, and backups.")]),e._v(" "),a("h4",{attrs:{id:"vertical-partitioning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vertical-partitioning"}},[e._v("#")]),e._v(" Vertical Partitioning")]),e._v(" "),a("p",[e._v("In this context, vertical partitioning can be used to describe storing different columns and tables in different databases, as opposed to storing rows in different databases. By utilizing cross-database queries, tables in different databases can be queried and manipulated in almost the exact same way as if they were in the same database.")]),e._v(" "),a("p",[e._v("If an application had a lot of static reference data, i.e. data points on every city and town in the US, those tables could be stored in another database to separate the storage costs\nof that data from interfering with the actual customer data in the primary database.")]),e._v(" "),a("h3",{attrs:{id:"normalize-normalize-normalize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#normalize-normalize-normalize"}},[e._v("#")]),e._v(" Normalize, Normalize, Normalize")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Database_normalization",target:"_blank",rel:"noopener noreferrer"}},[e._v("Normalization"),a("OutboundLink")],1),e._v(" is a huge topic, but it isn't often talked about today in terms of storage benefits, due to the low cost of disk space.")]),e._v(" "),a("p",[e._v("Proper normalization data can greatly reduce the redundancy of data. Often the most redundant data are of the string variety and thus can have a significant impact on the overall size of a database when not properly normalized. Aiming for the "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Third_normal_form",target:"_blank",rel:"noopener noreferrer"}},[e._v("third normal form"),a("OutboundLink")],1),e._v(" is a reasonable goal to achieve most of the size-related benefits that normal forms can offer.")]),e._v(" "),a("p",[e._v("Since there are always exceptions as to when normalized data or denormalized data is most beneficial, it will depend on the case at hand, but defaulting to normalizing data is generally a good strategy.")]),e._v(" "),a("br"),e._v(" "),a("br")])}),[],!1,null,null,null);t.default=r.exports}}]);