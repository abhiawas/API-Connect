# APIConnect Oauth Provider with Third Party Authentication 

In This project we have implemented the complete flow how APIconnect can be used with 3rd party Authentication services and still able to generate full OAuth flow capabitlies. Most of the enterprises have already created their own authentication service on an externally hosted server. Typically, the authentication service has already been branded with the enterprise look-and-feel and is deployed as a Web application,so they want to redirect the API Gateway to Authentication service and Extarct identity outside APIc.

More information can be extracted from IBM Official website: https://www.ibm.com/support/knowledgecenter/SSMNED_2018/com.ibm.apic.apionprem.doc/oauth_redirect.html

I have created a our own 3rd Party Authentication service for better understanding of an end to end flow and have been deployed in IBM Cloud foundry url: https://directpay.mybluemix.net/ and same URL has been used in APIconnect for Authentication and Redirection as well
But incase you want to run the code on url "localhost" please follow:

Prerequisites:
1) Install Nodejs and Install Postman

2) Clone this repository

3) cd /3rd party Authentication provider

4) npm install

5) node index.js

Application will be running on http://localhost:8080 

Now download the API Yaml file "Oauth Provider 3rd Party Authentication" from repository and export it in API connect. we have implemented Authorization Code and Client Credentials Grant in this implementation.
Now download the Product Yaml file "Oauth Provider Product" from repository and export it in API connect.

Publish the product in the catalog.

Goto Developer portal and create one Application give any name, discription and redirecturi to your application.

Change the host URL and Client Id, Secret and redirectUri  in Postman and test API.







 

