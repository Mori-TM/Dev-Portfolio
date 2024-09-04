let Fullscreen = true;

fetch('Posts.json')
  .then(response => response.json())
  .then(data => {
    const postContainer = document.getElementById('HomeTab');
    
    // Loop through each post in the JSON data
    data.posts.forEach(post => {
      // Create the figure element
      const figure = document.createElement('figure');
      figure.classList.add('PostBlock');

      // Create and append the figcaption for the title
      const figcaptionTitle = document.createElement('figcaption');
      figcaptionTitle.textContent = post.title;
      figure.appendChild(figcaptionTitle);

      // Create and append the image element
      const img = document.createElement('img');
      img.setAttribute('loading', 'lazy');
      img.src = post.image;
      img.alt = post.title;
      figure.appendChild(img);

      // Create and append the figcaption for the description
      const figcaptionDescription = document.createElement('figcaption');
      figcaptionDescription.classList.add('PostUnderText');
      figcaptionDescription.textContent = post.description;
      figure.appendChild(figcaptionDescription);

      // Append the figure to the post container
      const PostBackground = document.createElement('div');
      PostBackground.classList.add('PostBackground');

      PostBackground.appendChild(figure);

      postContainer.appendChild(PostBackground);
    });
  })
  .catch(error => console.error('Error fetching posts:', error));

function OpenPage(PageName) {
    // Hide all elements with class="tabcontent" by default 
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(PageName).style.display = "block";
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



window.addEventListener("load", function () {
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    const MGElement = document.querySelector('.topnav a[href="#MG"]');
    const HomeElement = document.querySelector('.topnav a[href="#home"]');
    const ContactElement = document.querySelector('.topnav a[href="#contact"]');
    const AboutElement = document.querySelector('.topnav a[href="#about"]');

    if (HomeElement != null) HomeButton();

    /*
        if (document.cookie.indexOf("Cookie") == -1) {
            console.log("No cookies");
    
            SetCookie(MakeID(10).toString());
    
            document.getElementById("Usr-Name").value = GetUserName();
    
            if (document.getElementById("Profile-Button") != null) ProfileButton();
        }
        else {
            console.log("Found Cookie: " + document.cookie);
            document.getElementById("Usr-Name").value = GetUserName();
    
            if (document.getElementById("Home-Button") != null) HomeButton();
            //    if (document.getElementById("Profile-Button") != null) ProfileButton();
        }
    */


    if (MGElement != null) MGElement.addEventListener("click", MGButton);
    if (HomeElement != null) HomeElement.addEventListener("click", HomeButton);
    if (ContactElement != null) ContactElement.addEventListener("click", ContactButton);
    if (AboutElement != null) AboutElement.addEventListener("click", AboutButton);

    //Usr-Submit
    //    if (document.getElementById("Usr-Submit") != null) document.getElementById("Usr-Submit").addEventListener("click", UserSubmit);
});

function ResestButtonColor() {
    var Color = "black";
    //    document.getElementById("Home-Button").style.color = Color;
    //    document.getElementById("Like-Button").style.color = Color;
    //    document.getElementById("Add-Button").style.color = Color;
    //    document.getElementById("Profile-Button").style.color = Color;
    //    document.getElementById("Settings-Button").style.color = Color;
}

let PressedColor = "#bf3519";

function ChangeToActive(Href) {
    const topnavElement = document.getElementById("myTopnav");
    const homeElements = topnavElement.getElementsByClassName("active");
    for (i = 0; i < homeElements.length; i++) {
        homeElements[i].classList.remove('active');
    }

    // Get the home element
    const homeElement = document.querySelector('.topnav a[href="#' + Href + '"]');

    // Add the 'active' class to the home element
    homeElement.classList.add('active');
}

function SetPageHeadline(Headline)
{
    document.getElementById("Headline").innerHTML = Headline;
}

function CloseMenuBar() {
    var x = document.getElementById("myTopnav");
    x.className = "topnav";
}

function MGButton() {
    ResestButtonColor();
    location.reload();
}

function HomeButton() {
    ResestButtonColor();
    ChangeToActive("home");
    SetPageHeadline("My Projects");
    CloseMenuBar();
    OpenPage("HomeTab");
}

function ContactButton() {
    ResestButtonColor();
    ChangeToActive("contact");
    SetPageHeadline("Contact Me");
    CloseMenuBar();
    OpenPage("ContactTab");
}

function AboutButton() {
    ResestButtonColor();
    ChangeToActive("about");
    SetPageHeadline("About Me");
    CloseMenuBar();
    OpenPage("AboutTab");
}