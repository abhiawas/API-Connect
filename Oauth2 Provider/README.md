# APIConnect Oauth2 Provider 

In This project we have implemented the complete OAuth2 flow 

More information can be extracted from IBM Official website:

https://www.ibm.com/support/knowledgecenter/SSMNED_5.0.0/com.ibm.apic.toolkit.doc/tapim_sec_api_config_scheme_oauth_endpoint.html

Now download the API Yaml file "Oauth2 Provider" from repository and export it in API connect. we have implemented following Grants in this implementation
1) Authorization Code
2) Resource Onwer
3) Implicit Flow
4) Client Credentials 

we use Introsecption URL to get the details about Access Token and related information.

Now download Accounts API which is Ooauth protected resource to test Access token secuirty. 
Now download the Product Yaml file "Oauth Provider Product" from repository and export it in API connect.

Publish the product in the catalog.

Goto Developer portal and create one Application give any name, discription and redirecturi to your application.

Change the host URL and Client Id, Secret and redirectUri  in Postman and test API.







 

