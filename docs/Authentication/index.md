<!-- ---
sidebar_position: 1
id: authentication
title: Overview
sidebar_label: Overview
slug: /authentication
---

The Antsomi API uses OAuth 2.0 for user authorization and API authentication. Applications must be authorized and authenticated before they can fetch data from Antsomi or get access to Antsomi data.

Depending on the type of permissions your integration will require, follow one of the two authorization flows below in Permission Types to get started.

## Permission Types
Permissions are authorization consents to access Antsomi resources. The Antsomi platform uses permissions to protect and prevent abuse of User data. Your application must have the appropriate permissions before it can access data.

Permissions are classified into two types.

- **Member Authorization**:
![3 legged](https://netstorage.ringcentral.com/dpw/guide/images/oauth-auth-token-flow.png)
Member Authorization or Authorization Code Flow (3-legged authorization (3LA))
Using 3LA, a User grants permissions to your application to access the User's resources on Antsomi. Your application has no access to these resources without user approval. Use this flow if you are requesting access to a user's account to use their data and make requests on their behalf. This is the most commonly used permission type across Antsomi APIs.


- **Application Authorization**:
![2 legged](https://i.imgur.com/qjb61yG.png)
Application Authorization or Client Credential Flow (2-legged authorization (2LA))
Using 2LA, Antsomi grants permissions to your application to access protected Antsomi resources. If you are accessing APIs that are not user specific, use this flow.

:::note
Always request the minimal permission scopes necessary for your use case.
::: -->
