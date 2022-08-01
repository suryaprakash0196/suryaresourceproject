### **Description:**

You have to develop a Resource Management Admin portal. This portal consists of a list of resources. The admin should be able to see all the resources, see tag-wise resources, and create a resource.

There are two pages

1. **Home Page**

   - You need to get the list of resources with this API and display them in the form of cards as shown on the design screen.
   - There should be three tabs.
     - Resources Tab: Should consist of all the resources
     - Requests Tab: Should consist of the resources with tag_name `request`
     - Users Tab: Should consist of the resources with tag_name `user`
   - There should be a Search bar where the user can search for a resource by the resource name.

   _Resources List API:_ [https://media-content.ccbp.in/website/react-assignment/resources.json](https://media-content.ccbp.in/website/react-assignment/resources.json)

   _Design Screen:_ \*\*\*\*[https://www.figma.com/file/7DWBcZ3HuMPxCqTVVlHwIB/React-Assignment?node-id=5%3A599](https://www.figma.com/file/7DWBcZ3HuMPxCqTVVlHwIB/React-Assignment?node-id=5%3A599)

2. **Add Resource Page**

   - The user should be navigated to the Add Resource Page when clicking on the Add button in the App Header.
   - The user should be able to add/create a resource by entering the resource details and clicking on the CREATE button as shown on the design screen.
   - You should add validations i.e, The user should be able to click the CREATE button only after entering valid resource details (Validation includes empty validations, type validations, character limit, etc).
   - You should show acknowledgement for errors (API Failure or Validation errors) and successful resource creation using [React Toastify](https://github.com/fkhadra/react-toastify).
     - The toast should be shown at the bottom centre of the page with styles similar to the images given below.
     - Failure Toast
       ![Failure Toast.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/20ce7eb3-bc84-4c46-8089-eea3e187d5df/Failure_Toast.png)
     - Success Toast
       ![Success_Toast.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5ef3d7ad-cc8d-4dc3-b2ab-b3040039322f/Success_Toast.png)

   _Add Resource API:_ [https://media-content.ccbp.in/website/react-assignment/add_resource.json](https://media-content.ccbp.in/website/react-assignment/add_resource.json)

   **Note:** The above API won’t add any resource to the existing resources, but will give you a 200 status on API Success without any validations. So, you need to add client-side validations like request object type matching and handling other response statuses.

   _Design Screen:_ [_https://www.figma.com/file/7DWBcZ3HuMPxCqTVVlHwIB/React-Assignment?node-id=5%3A1918_](https://www.figma.com/file/7DWBcZ3HuMPxCqTVVlHwIB/React-Assignment?node-id=5%3A1918)

   ### Add-ons:

   These add-ons will be considered as merit when you do these along with the above-mentioned Assignment. It’s great if you can add as many as these.

   1. **Login Page**
      - You can create a front-end version of the Login page without any back-end.
      - The user should be able to enter his/her mobile number and password in order to log in.
      - You can add validations i.e, the user should be able to click the login button only after entering a valid username and password. Otherwise, you should show the appropriate error below the respective field.
      - You can also add the logout functionality inside the application when the user clicks on the profile icon in the Header.
      - The design for the Login page is your call, unlock your creativity.
   2. **Pagination**
      - You can show 9 items per page using client-side Pagination.
      - The user should navigate between pages using the pagination buttons as shown in the below image.
        - Pagination Image
          ![Pagination_Buttons.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/30363dff-5f51-4dca-acda-3e3ede60158c/Pagination_Buttons.png)
   3. **Resource Details**
      - You can show the resource-specific details in a pop-up when the user clicks on a specific resource.
      - You can use the locally stored resource details for showing the resource-specific details.
