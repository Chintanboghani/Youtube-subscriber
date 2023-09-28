# Get Youtube Subscribers API

<br/>
Hi Folks,

I have created this repository to store my project code, named "Get YouTube
Subscriber API". This is a part of my Back-end Capstone Project.

This project is hosted solely as a Back-end project. This project API has 3
endpoints /subscribers, /subscribers/names, and /subscribers/:id. The response
is generated in JSON format. The code is entirely written in Javascript.

<br/>

## Content

- About it's Working
- Getting Started
- Languages/Database Used
- Relevant Links

<br/>

### About it's Working

---

**API calls**

Below is the list of endpoints/pathnames that you can call on localhost & on the
deployed link as well. All of these are GET requests.

/subscribers: This is the First Endpoint. After calling this, the server
responds with an array of objects of subscribers with all their details.

/subscribers/names: This is the Second Endpoint. The server responds with an
array of objects containing only the names of subscribers & subscribed channels
as their fields, after making this request.

/subscribers/:id : This is the Third & Last Endpoint. The user needs to provide
an ID here in place of an ID.

There are two cases here:

1. If the ID matches, then it will return one object matching the ID field with
   all the details of the subscriber.
2. If the ID does not match, then it will return an error message and a status
   code of 400.

**Testing and Deployment**

This API is deployed on Render.com. The testing & validation is done with the
help of POSTMAN. The API schema documentation has also been made with POSTMAN.
After navigating to the below-mentioned deployment URL, add the pathnames given
above.

<br/>

### Getting Started

---

**Locally**

Type `git clone <paste the URL for this repository>` in your cmd and use it for
yourself.

To start using the API on your software like POSTMAN or running on a browser
follow these steps :

- in the `.\src` run `npm install mongoose express nodemon` command.
- Navigate to the appropriate path with cd and then run the command `npm start`
  and wait for the messages _connected to MongoDB Atlas successfully_ and
  _server is running on Port 3000_ to appear and you are all set to use this API
  locally.

**Forking**

You can also clone this repository or submit a pull request here. To submit a
pull request you can follow the steps given below:

- Copy or fork the remote repository.
- Download or clone your copy of the repository to your local filesystem.
- Navigate to your copy of the repository and click the green "Clone or
  download" button. Click the clipboard next to the https clone URL to copy it.
- At the command prompt enter the following

```
		git clone <the pasted URL>
```

- Create a new branch to work your edits, switch to that branch, change to your
  new repository, and type

```
		git checkout -b <newbranchname>
```

- Make your change, commit it (adding a clear and concise commit message), and
  push it to your local copy of the repository on GitHub. You will need to set
  the origin for your new branch the first time you push it up, so use the
  following code:

```
		git push -u origin <newbranchname>
```

- Navigate to the original GitHub repository, and you should see a big green
  button marked "Compare and pull request".
- Click that button and you will be taken to a page giving you to describe your
  pull request and show you the changes you have made. Write a clear and concise
  subject and description for your change asking for a merge.

> **Note:** You need to have installed **Node Js** installed on your device to
> run this code.

<br/>

### Languages/Database Used

---

Following are used to create the website

- Javascript
- Node js(Express)
- MongoDB(atlas) <br/>
