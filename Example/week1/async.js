 async function add(a, b) {
     return a + b;
   }
  
  // Usage: 
  add(1, 3).then(result => console.log(result));
  //-----------------------

  async function userProfile() {
    let user = await getUser();
    let friendsOfUser = await getFriendsOfUser(userId);
    let posts = await getUsersPosts(userId);
  
    showUserProfilePage(user, friendsOfUser, posts);
  }
  