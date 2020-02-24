(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{225:function(s,a,t){"use strict";t.r(a);var e=t(28),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"mail-without-sql-agent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mail-without-sql-agent"}},[s._v("#")]),s._v(" Mail without SQL Agent?")]),s._v(" "),t("p",[s._v("While SQL Server Express is still 100% able to send mail using msdb's stored procedures,\nmost people rely on Management Studio's GUI and the Database Mail feature to do the initial setup of profiles and accounts\nto make sending mail possible. Despite this limitation, the underlying stored procedures located within the msdb database are still fully able to replication the GUI driven setup that Database Mail aids in. This leaves T-SQL as the primary alternative for enabling and configuring SQL Server Express so that "),t("code",[s._v("sp_send_dbmail")]),s._v(" can be used to send mail out. Adding this functionality with a "),t("a",{attrs:{href:"http://expressdb.io/sql-server-express-replace-sql-agent/",target:"_blank",rel:"noopener noreferrer"}},[s._v("replacement for SQL Agent"),t("OutboundLink")],1),s._v(" can help mimic much of the functionality that Database Mail and SQL Agent provide on the full featured editions of SQL Server.")]),s._v(" "),t("p",[t("img",{attrs:{src:"/database_mail.png",alt:"SQL Server Mail in non-Express Editions"}})]),s._v(" "),t("p",[t("em",[s._v("The Database Mail feature as seen in other SQL Server editions.")])]),s._v(" "),t("p",[s._v("While a CLR can also be used to send mail, that route is far more work and increases the complexity of\nsending mail via SQL Server quite a bit. This requires enabling CLRs, which is disabled by default. Enabling CLRs opens the instance up to external code, which may be a security or audit concern and is often allowed in many corporate environments.")]),s._v(" "),t("h2",{attrs:{id:"setting-up-mail-on-sql-server-express"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-mail-on-sql-server-express"}},[s._v("#")]),s._v(" Setting up Mail on SQL Server Express")]),s._v(" "),t("p",[s._v("The below code sample demonstrates the entire process of setting up mail on SQL Server Express,\nincluding sending a test email at the end.")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),t("p",[s._v("Utilizing the database mail on SQL Server Express Edition may violate the license agreement. Check with Microsoft before implementing this in a production environment.")])]),s._v(" "),t("p",[s._v("The setup will:")]),s._v(" "),t("ol",[t("li",[s._v("Create a mail account")]),s._v(" "),t("li",[s._v("Create a mail profile")]),s._v(" "),t("li",[s._v("Add the account to the profile")]),s._v(" "),t("li",[s._v("Add permission to use the profile for a user or role")]),s._v(" "),t("li",[s._v("Enable database mail XPs")]),s._v(" "),t("li",[s._v("Send a test email")])]),s._v(" "),t("p",[s._v("The stored procedures required are:")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/sysmail-add-account-sp-transact-sql?view=sql-server-2017",target:"_blank",rel:"noopener noreferrer"}},[s._v("sysmail_add_account_sp"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/sysmail-add-profile-sp-transact-sql?view=sql-server-2017",target:"_blank",rel:"noopener noreferrer"}},[s._v("sysmail_add_profile_sp"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/sysmail-add-profileaccount-sp-transact-sql?view=sql-server-2017",target:"_blank",rel:"noopener noreferrer"}},[s._v("sysmail_add_profileaccount_sp"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/sysmail-add-principalprofile-sp-transact-sql?view=sql-server-2017",target:"_blank",rel:"noopener noreferrer"}},[s._v("sysmail_add_principalprofile_sp"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/sp-configure-transact-sql?view=sql-server-2017",target:"_blank",rel:"noopener noreferrer"}},[s._v("sp_configure"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/sp-send-dbmail-transact-sql?view=sql-server-2017",target:"_blank",rel:"noopener noreferrer"}},[s._v("sp_send_dbmail"),t("OutboundLink")],1)])]),s._v(" "),t("h3",{attrs:{id:"the-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-code"}},[s._v("#")]),s._v(" The Code")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Create a mail account */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXECUTE")]),s._v(" msdb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dbo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sysmail_add_account_sp\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@account_name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MyMailAccount'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@description")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Used for sending email from SQL Express'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--Name of sending email address")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@email_address")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MyExpressDB@mycompany.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--Display name for the sending email address")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@display_name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MyExpressDB'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--Username to login to the mail server")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@username")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MyMailUser@mycompany.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--Password to login to the mail server")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@password")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MyPassword'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--Name or IP of the mail server ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@mailserver_name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mail.queryingsql.com'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--Default is 25, or specify a custom one")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@port")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n       \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Create a profile */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXECUTE")]),s._v(" msdb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dbo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sysmail_add_profile_sp\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@profile_name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MyMailProfile'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@description")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Main profile used to send email'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Add the account to the profile */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXECUTE")]),s._v(" msdb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dbo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sysmail_add_profileaccount_sp\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@profile_name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MyMailProfile'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@account_name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MyMailAccount'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* The sequence number determines the order \nin which Database Mail uses accounts in the profile,\ngoing from lowest to highest until one works. */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@sequence_number")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Grant permission to public to use the profile\nor choose a more restrictive group if desired */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXECUTE")]),s._v(" msdb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dbo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sysmail_add_principalprofile_sp\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@profile_name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MyMailProfile'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@principal_name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'public'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@is_default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Enable Mail XPs */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXECUTE")]),s._v(" sp_configure "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'show advanced options'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nGO\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RECONFIGURE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nGO\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXECUTE")]),s._v(" sp_configure "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Database Mail XPs'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nGO\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RECONFIGURE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nGO\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Send a test email */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXECUTE")]),s._v(" msdb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dbo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sp_send_dbmail \n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@profile_name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MyMailProfile'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@recipients")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MyTestAddress@mycompany.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@subject")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Test Mail from SQL Express'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@body")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello world!'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br")])]),t("br"),s._v(" "),t("br")])}),[],!1,null,null,null);a.default=n.exports}}]);