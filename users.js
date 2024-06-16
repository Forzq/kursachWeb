document.addEventListener('DOMContentLoaded', function() {
    var usersContainer = document.querySelector('.Users');
    var users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
  
    if (users.length === 0) {
      usersContainer.textContent = 'Нет зарегистрированных пользователей.';
    } else {
  
      for (var i = 0; i < users.length; i++) {
        var userItem = document.createElement('div');
        userItem.classList.add("User");
        userItem.innerHTML ='<p>First Name: '+ users[i].FirstName +'</p>'+ '<br>'+'<p>Last Name: '+users[i].LastName +'</p>'+'<br>'+'<p>Nickname: '+users[i].NickName +'</p>'+'<br>'+'<p>E-Mail: '+ users[i].email+'</p>';
        usersContainer.appendChild(userItem);
      }
    }
  });