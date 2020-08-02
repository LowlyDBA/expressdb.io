(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{368:function(s,n,e){"use strict";e.r(n);var a=e(42),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"how-does-unattended-install-work"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-does-unattended-install-work"}},[s._v("#")]),s._v(" How Does Unattended Install Work?")]),s._v(" "),e("p",[s._v("Automating the installation of SQL Server Express, also known as an\nunattended install, is done by launching the setup process via the command\nline and passing pre-determined parameters so that no human interaction\nis needed to complete the setup. This is ideal for any situation where\nmany servers must be provisioned and a requirement when bundling\nSQL Server Express with other software using it as a database.")]),s._v(" "),e("p",[s._v("The configuration for the install can be input directly as parameter to\nthe setup file:")]),s._v(" "),e("div",{staticClass:"language-batch line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-batch"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Setup")]),s._v(".exe /ACTION="),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Install"')])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("or passed in via a configuration file:")]),s._v(" "),e("div",{staticClass:"language-batch line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-batch"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Setup")]),s._v(".exe /ConfigurationFile=MyConfigurationFile.INI  ")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Using a configuration file makes it easy to store, maintain, and customize the various parameters that may change based on SQL Server version, install type, and target server. For this reason, the below configurations will be provided as template files that can be tailored to any additional needs.")]),s._v(" "),e("h2",{attrs:{id:"unattended-installs-for-sql-server-express"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unattended-installs-for-sql-server-express"}},[s._v("#")]),s._v(" Unattended Installs for SQL Server Express")]),s._v(" "),e("p",[s._v("Installing SQL Server Express from a configuration file has a few differences when\ncompared to other versions like Standard and Enterprise. Some of the parameters\nbehave slightly differently, do not apply, and come with different default values.\nThese examples take those factors into account by having all mandatory fields\npresent and optional settings commented out to provide a generic template that can\nbe customized as needed.")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#_2008-2012-2014-unattended-install"}},[s._v("SQL Server Express 2008, 2012, 2014 Unattended Install")]),s._v(" (Windows)")]),s._v(" "),e("li",[e("a",{attrs:{href:"#_2016-2017-2019-unattended-install"}},[s._v("SQL Server Express 2016, 2017, 2019 Unattended Install")]),s._v(" (Windows)")]),s._v(" "),e("li",[e("a",{attrs:{href:"#_2017-2019-unattended-install-linux"}},[s._v("SQL Server Express 2017, 2019 Unattended Install")]),s._v(" (Linux)")])]),s._v(" "),e("h2",{attrs:{id:"_2008-2012-2014-unattended-install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2008-2012-2014-unattended-install"}},[s._v("#")]),s._v(" 2008, 2012, 2014 Unattended Install")]),s._v(" "),e("p",[s._v("The configuration parameters change very little over the years, mostly with\nnew options being added and very few being modified or removed. Luckily, this\nmeans that the same configuration file can often be used for multiple version\ninstalls, as long as the general requirements of each install remain the same.")]),s._v(" "),e("p",[s._v("The below sample configuration file focuses solely on the database engine installation\nand does not include other features to keep the configuration as generic as possible.")]),s._v(" "),e("div",{staticClass:"language-batch line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-batch"}},[e("code",[s._v("; Microsoft SQL Server Express 2008, 2012, 2014 Configuration Template\n; Provided by Express Databases, LLC\n; https://expressdb.io\n[OPTIONS]  \n; Specifies a Setup work flow, like INSTALL, UNINSTALL, or UPGRADE.  \n; This is a required parameter.  \n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ACTION")]),s._v("="),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Install"')]),s._v("  ")]),s._v("\n\n; Specifies features to install, uninstall, or upgrade.  \n; The list of top-level features include SQL, AS, RS, IS, and Tools.  \n; The SQL feature will install the database engine, replication, and full-text.  \n; The Tools feature will install Management Tools, Books online,\n; SQL Server Data Tools, and other shared components.  \n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FEATURES")]),s._v("=SQL,Tools  ")]),s._v("\n\n; Accept license terms\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IACCEPTSQLSERVERLICENSETERMS")]),s._v("="),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"True"')])]),s._v("\n\n; Install English version if other langauge packs are available\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENU")]),s._v("="),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"True"')])]),s._v("\n\n; Don"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("t display any install UI\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("QUIET")]),s._v("="),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"True"')])]),s._v("\n\n; Show progress in command line\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INDICATEPROGRESS")]),s._v("="),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"True"')])]),s._v("\n\n; Define an Instance name\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSTANCENAME")]),s._v("="),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SQLEXPRESS"')])]),s._v("\n\n; Specify SQL Service account\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SQLSVCACCOUNT")]),s._v("="),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SQLServiceAccount"')])]),s._v("\n\n; Specify SQL Service Account pwd\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SQLSVCPASSWORD")]),s._v("="),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ChangeMe123"')])]),s._v("\n\n; Enable instant file initialization for the service account  \n; Enabling this is a best practice\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SQLSVCINSTANTFILEINIT")]),s._v("="),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"True"')])]),s._v('\n\n; OPTIONAL SETTINGS\n\n; Specify non-default data file directory\n; INSTALLSQLDATADIR=""\n\n; Specify non-default user database data file directory\n; SQLUSERDBDIR=""\n\n; Specify non-default user database log file directory\n; SQLUSERDBLOGDIR=""\n\n; Specify non-default directory for tempdb files\n; SQLTEMPDBDIR=""\n\n; Specify non-default directory for tempdb log files\n; SQLTEMPDBLOGDIR=""\n\n; Specify non-default installation directory\n; INSTALLSHAREDDIR=""\n\n; Specify non-default backup directory\n; SQLBACKUPDIR=""\n\n; Specify non-default installation directory for 32-bit components  \n; INSTALLSHAREDWOWDIR=""\n\n; Specify non-default installation directory for instance components\n; INSTANCEDIR=""\n\n; Enable run-as credentials for SQL Server Express\n; ENABLERANU="True"\n\n; Set non-default, Windows Authentication security mode\n; SECURITYMODE="SQL"\n\n; Set the default SA Password, required for SECURITYMODE=SQL\n; SAPWD = "MyStrongSAPwd"\n\n; Specify non-default collation\n; SQLCOLLATION=""\n\n; Specify startup mode for SQL Server: Automatic, Disabled, Manual\n; SQLSVCSTARTUPTYPE="Automatic"\n\n; Specify additional SA users - current user is SA by default\n; SQLSYSADMINACCOUNTS=""\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br"),e("span",{staticClass:"line-number"},[s._v("72")]),e("br"),e("span",{staticClass:"line-number"},[s._v("73")]),e("br"),e("span",{staticClass:"line-number"},[s._v("74")]),e("br"),e("span",{staticClass:"line-number"},[s._v("75")]),e("br"),e("span",{staticClass:"line-number"},[s._v("76")]),e("br"),e("span",{staticClass:"line-number"},[s._v("77")]),e("br"),e("span",{staticClass:"line-number"},[s._v("78")]),e("br"),e("span",{staticClass:"line-number"},[s._v("79")]),e("br"),e("span",{staticClass:"line-number"},[s._v("80")]),e("br"),e("span",{staticClass:"line-number"},[s._v("81")]),e("br"),e("span",{staticClass:"line-number"},[s._v("82")]),e("br"),e("span",{staticClass:"line-number"},[s._v("83")]),e("br"),e("span",{staticClass:"line-number"},[s._v("84")]),e("br"),e("span",{staticClass:"line-number"},[s._v("85")]),e("br"),e("span",{staticClass:"line-number"},[s._v("86")]),e("br")])]),e("h2",{attrs:{id:"_2016-2017-2019-unattended-install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2016-2017-2019-unattended-install"}},[s._v("#")]),s._v(" 2016, 2017, 2019 Unattended Install")]),s._v(" "),e("p",[s._v("The newest versions of SQL Server Express have a configuration file that is\nvery similar to prior versions, with the addition of two new optional parameters:")]),s._v(" "),e("h4",{attrs:{id:"sqltempdbfilesize"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sqltempdbfilesize"}},[s._v("#")]),s._v(" SQLTEMPDBFILESIZE")]),s._v(" "),e("p",[s._v("This parameter allows the default size of all new tempdb data files to be specified\nat the time of installation. While the default for SQL Server Express is a paltry 4MB and\nall other versions are set to 8MB, customizing this value reduces the number of\npost-install steps required since most servers will require more than a few MB of\nspace for the tempdb.")]),s._v(" "),e("h4",{attrs:{id:"sqltempdblogfilesize"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sqltempdblogfilesize"}},[s._v("#")]),s._v(" SQLTEMPDBLOGFILESIZE")]),s._v(" "),e("p",[s._v("Similar to the above, the size of the tempdb log can also now be specified during\nthe installation process. The defaults of 4MB and 8MB are the same, so most people\nwill want to specify a larger value.")]),s._v(" "),e("p",[s._v("The below sample configuration file focuses solely on the database engine installation\nand does not include other features to keep the configuration as generic as possible.")]),s._v(" "),e("div",{staticClass:"language-batch line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-batch"}},[e("code",[s._v("; Microsoft SQL Server Express 2016/2017 Configuration Template\n; Provided by Express Databases, LLC\n; https://expressdb.io\n[OPTIONS]  \n; Specifies a Setup work flow, like INSTALL, UNINSTALL, or UPGRADE.  \n; This is a required parameter.  \n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ACTION")]),s._v("="),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Install"')]),s._v("  ")]),s._v("\n\n; Specifies features to install, uninstall, or upgrade.  \n; The list of top-level features include SQL, AS, RS, IS, and Tools.  \n; The SQL feature will install the database engine, replication, and full-text.  \n; The Tools feature will install Management Tools, Books online,\n; SQL Server Data Tools, and other shared components.  \n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FEATURES")]),s._v("=SQL,Tools  ")]),s._v("\n\n; Accept license terms\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IACCEPTSQLSERVERLICENSETERMS")]),s._v("="),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"True"')])]),s._v("\n\n; Install English version if other langauge packs are available\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENU")]),s._v("="),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"True"')])]),s._v("\n\n; Don"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("t display any install UI\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("QUIET")]),s._v("="),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"True"')])]),s._v("\n\n; Show progress in command line\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INDICATEPROGRESS")]),s._v("="),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"True"')])]),s._v("\n\n; Define an Instance name\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSTANCENAME")]),s._v("="),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SQLEXPRESS"')])]),s._v("\n\n; Specify SQL Service account\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SQLSVCACCOUNT")]),s._v("="),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SQLServiceAccount"')])]),s._v("\n\n; Specify SQL Service Account pwd\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SQLSVCPASSWORD")]),s._v("="),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ChangeMe123"')])]),s._v("\n\n; Enable instant file initialization for the service account - optional\n; Enabling this is a best practice\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SQLSVCINSTANTFILEINIT")]),s._v("="),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"True"')])]),s._v('\n\n; OPTIONAL SETTINGS\n\n; Specify non-default data file directory\n; INSTALLSQLDATADIR=""\n\n; Specify non-default user database data file directory\n; SQLUSERDBDIR=""\n\n; Specify non-default user database log file directory\n; SQLUSERDBLOGDIR=""\n\n; Specify non-default directory for tempdb files\n; SQLTEMPDBDIR=""\n\n; Specify non-default directory for tempdb log files\n; SQLTEMPDBLOGDIR=""\n\n; Specifies initial file size of each tempdb data file. Default for SQL Server Express is 4MB, others are 8MB\n; SQLTEMPDBFILESIZE=4\n\n; Specifies initial file size the tempdb log file. Default for SQL Server Express is 4MB, others are 8MB\n; SQLTEMPDBLOGFILESIZE=4\n\n; Specify non-default installation directory\n; INSTALLSHAREDDIR=""\n\n; Specify non-default backup directory\n; SQLBACKUPDIR=""\n\n; Specify non-default installation directory for 32-bit components  \n; INSTALLSHAREDWOWDIR=""\n\n; Specify non-default installation directory for instance components\n; INSTANCEDIR=""\n\n; Enable run-as credentials for SQL Server Express\n; ENABLERANU="True"\n\n; Set non-default, Win Authentication security mode\n; SECURITYMODE="SQL"\n\n; Set the default SA Password - required for SECURITYMODE=SQL\n; SAPWD = "MyStrongSAPwd"\n\n; Specify non-default collation\n; SQLCOLLATION=""\n\n; Specify startup mode for SQL Server: Automatic, Disabled, Manual\n; SQLSVCSTARTUPTYPE="Automatic"\n\n; Specify additional SA users - current user is SA by default\n; SQLSYSADMINACCOUNTS=""\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br"),e("span",{staticClass:"line-number"},[s._v("72")]),e("br"),e("span",{staticClass:"line-number"},[s._v("73")]),e("br"),e("span",{staticClass:"line-number"},[s._v("74")]),e("br"),e("span",{staticClass:"line-number"},[s._v("75")]),e("br"),e("span",{staticClass:"line-number"},[s._v("76")]),e("br"),e("span",{staticClass:"line-number"},[s._v("77")]),e("br"),e("span",{staticClass:"line-number"},[s._v("78")]),e("br"),e("span",{staticClass:"line-number"},[s._v("79")]),e("br"),e("span",{staticClass:"line-number"},[s._v("80")]),e("br"),e("span",{staticClass:"line-number"},[s._v("81")]),e("br"),e("span",{staticClass:"line-number"},[s._v("82")]),e("br"),e("span",{staticClass:"line-number"},[s._v("83")]),e("br"),e("span",{staticClass:"line-number"},[s._v("84")]),e("br"),e("span",{staticClass:"line-number"},[s._v("85")]),e("br"),e("span",{staticClass:"line-number"},[s._v("86")]),e("br"),e("span",{staticClass:"line-number"},[s._v("87")]),e("br"),e("span",{staticClass:"line-number"},[s._v("88")]),e("br"),e("span",{staticClass:"line-number"},[s._v("89")]),e("br"),e("span",{staticClass:"line-number"},[s._v("90")]),e("br"),e("span",{staticClass:"line-number"},[s._v("91")]),e("br"),e("span",{staticClass:"line-number"},[s._v("92")]),e("br")])]),e("h2",{attrs:{id:"_2017-2019-unattended-install-linux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2017-2019-unattended-install-linux"}},[s._v("#")]),s._v(" 2017, 2019 Unattended Install Linux")]),s._v(" "),e("p",[s._v("Microsoft has done an excellent job on documenting an unattended SQL Server installation for Ubuntu, SUSE, and Red Hat.")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/linux/sample-unattended-install-redhat?view=sql-server-ver15",target:"_blank",rel:"noopener noreferrer"}},[s._v("Unattended SQL Server install for Redhat"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/linux/sample-unattended-install-suse?view=sql-server-ver15",target:"_blank",rel:"noopener noreferrer"}},[s._v("Unattended SQL Server install for SUSE"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/linux/sample-unattended-install-ubuntu?view=sql-server-ver15",target:"_blank",rel:"noopener noreferrer"}},[s._v("Unattended SQL Server install for Ubuntu"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"further-reading"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[s._v("#")]),s._v(" Further Reading")]),s._v(" "),e("ul",[e("li",[s._v("Microsoft's documentation "),e("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server-from-the-command-prompt?view=sql-server-2017",target:"_blank",rel:"noopener noreferrer"}},[s._v("Install SQL Server from the Command Line"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("Microsoft's "),e("a",{attrs:{href:"https://msdn.microsoft.com/library/dd239405(v=sql.120).aspx",target:"_blank",rel:"noopener noreferrer"}},[s._v("Install SQL Server 2014 using a Configuration File"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("SQL CAT Team's "),e("a",{attrs:{href:"https://blogs.msdn.microsoft.com/sqlcat/2017/10/03/unattended-install-and-configuration-for-sql-server-2017-on-linux/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Unattended install and configuration for SQL Server 2017 on Linux"),e("OutboundLink")],1)])]),s._v(" "),e("br"),s._v(" "),e("br")])}),[],!1,null,null,null);n.default=t.exports}}]);