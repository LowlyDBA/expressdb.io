(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{223:function(e,r,t){"use strict";t.r(r);var s=t(28),a=Object(s.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"express-vs-other-editions-security"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#express-vs-other-editions-security"}},[e._v("#")]),e._v(" Express vs Other Editions' Security")]),e._v(" "),t("p",[e._v("Conveniently, security best practices for SQL Server Express are almost\nthe exact same as they are for any other more fully featured edition.")]),e._v(" "),t("p",[e._v("The primary difference is that by default, SQL Server Express has its networking\nprotocols disabled by default. This means that out of the box, SQL Express isn't available\nto be connected to by other computers on a network. This actually makes it far "),t("strong",[e._v("more")]),e._v(" secure\nby default than other editions. If SQL Server Express is being bundled with an application\nand both are residing on the same server, this default setting creates a very secure\ninstance without needing further customization.")]),e._v(" "),t("p",[e._v("Otherwise, standard best practices apply. Since general security is out of the scope\nof this site, see the "),t("a",{attrs:{href:"#further-reading"}},[e._v("Further Reading")]),e._v(" section at the bottom of this page\nfor general security recommendations.")]),e._v(" "),t("h3",{attrs:{id:"enabling-network-connectivity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enabling-network-connectivity"}},[e._v("#")]),e._v(" Enabling Network Connectivity")]),e._v(" "),t("p",[e._v("If the Express instance needs to be available on a network, however, the following steps need\nto be completed:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Open SQL Server Configuration Manager")]),e._v(" "),t("p",[t("img",{attrs:{src:"/sql_configuration_manager_1.PNG",alt:"SQL Server Express Configuration Manager"}})])]),e._v(" "),t("li",[t("p",[e._v('Expand "SQL Server Network Configuration"')])]),e._v(" "),t("li",[t("p",[e._v('Select "Protocols for MSSQLSERVER" (or a custom instance name)')])]),e._v(" "),t("li",[t("p",[e._v('On the right pane, right click "TCP/IP" and choose "Properties"')]),e._v(" "),t("p",[t("img",{attrs:{src:"/sql_configuration_manager_2.PNG",alt:"SQL Server Express Configuration Manager"}})])]),e._v(" "),t("li",[t("p",[e._v('In the "Protocol" tab, make sure "Enabled" is set to '),t("strong",[e._v("Yes")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/sql_configuration_manager_3.PNG",alt:"SQL Server Express Configuration Manager"}})])]),e._v(" "),t("li",[t("p",[e._v('In the "IP Addresses" tab, scroll to the bottom of the dialogue to the header "IPAll" and  make sure the TCP Port is set to 1433 and apply all changes.')]),e._v(" "),t("p",[t("img",{attrs:{src:"/sql_configuration_manager_4.PNG",alt:"SQL Server Express Configuration Manager"}})])]),e._v(" "),t("li",[t("p",[e._v('Open the computer\'s Services find "SQL Server Browser" right click to open the "Properties" dialogue')]),e._v(" "),t("p",[t("img",{attrs:{src:"/sql_configuration_manager_5.PNG",alt:"SQL Server Express Configuration Manager"}})])]),e._v(" "),t("li",[t("p",[e._v('Set start to "Automatic" and apply the changes.')]),e._v(" "),t("p",[t("img",{attrs:{src:"/sql_configuration_manager_6.PNG",alt:"SQL Server Express Configuration Manager"}})])])]),e._v(" "),t("h2",{attrs:{id:"further-reading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),t("ul",[t("li",[e._v("Microsoft Documentation's "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/dotnet/framework/data/adonet/sql/sql-server-express-security",target:"_blank",rel:"noopener noreferrer"}},[e._v("SQL Server Express Security"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Microsoft Documentation's "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/relational-databases/security/securing-sql-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("Securing SQL Server"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("MSSQLTips' "),t("a",{attrs:{href:"https://www.mssqltips.com/sqlservertip/3159/sql-server-security-checklist/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SQL Server Security Checklist"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Robert Sheldon's "),t("a",{attrs:{href:"https://www.red-gate.com/simple-talk/sql/database-administration/how-to-get-sql-server-security-horribly-wrong/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Get SQL Server Security Horribly Wrong"),t("OutboundLink")],1)])]),e._v(" "),t("br"),e._v(" "),t("br")])}),[],!1,null,null,null);r.default=a.exports}}]);