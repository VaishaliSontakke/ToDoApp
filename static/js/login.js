// Generated by CoffeeScript 1.12.2
(function() {
  var url;

  url = "/login";

  $("#login").click(function() {
    var formData;
    formData = {};
    if (!/@/.test($('#username').val())) {
      return alert("Enter a Valid Email Address");
    } else {
      formData["user_name"] = $('#username').val().replace(' ', '').toLowerCase().split('@')[0];
      formData["user_password"] = $('#userpassword').val();
      formData["submitType"] = "login";
      console.log(formData);
      return $.ajax(url, {
        type: 'POST',
        data: formData,
        success: function(data) {
          var next_url;
          next_url = "http://localhost:8080/user/";
          next_url = next_url.concat(formData["user_name"]);
          console.log(next_url);
          return window.location.replace(next_url);
        },
        error: function(data) {
          return alert(data.responseText);
        }
      });
    }
  });

  $("#register").click(function() {
    var formData;
    formData = {};
    if (!/@/.test($('#username').val())) {
      return alert("Enter a Valid Email Address");
    } else {
      formData["user_name"] = $('#username').val().replace(' ', '').toLowerCase().split('@')[0];
      formData["user_password"] = $('#userpassword').val();
      formData["submitType"] = "register";
      console.log(formData);
      return $.ajax(url, {
        type: 'POST',
        data: formData,
        success: function(data) {
          var next_url;
          next_url = "http://localhost:8080/user/";
          next_url = next_url.concat(formData["user_name"]);
          return window.location.replace(next_url);
        },
        error: function(data) {
          return alert(data.responseText);
        }
      });
    }
  });

}).call(this);