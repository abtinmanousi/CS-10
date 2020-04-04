// EVENT LISTENER

document.getElementById('android-btn').addEventListener('click', Clickandroid)
document.getElementById('apple-btn').addEventListener('click', Clickapple)



// Function click-android

function Clickandroid() {
    document.getElementById('imgmain').src = 'images/Android-Logo.jpg';
    document.getElementById('href').href = 'https://www.android.com/';
    document.getElementById('href').innerHTML = 'Android Home';
    document.getElementById('href').style.background = '#a4c93b';
    document.getElementById('body').style.background = '#a4c93b';
}

function Clickapple() {
    document.getElementById('imgmain').src = 'images/apple-Logo.jpg';
    document.getElementById('href').href = 'https://www.apple.com/';
    document.getElementById('href').innerHTML = 'Apple Home';
    document.getElementById('href').style.background = ' #b6bcca';
    document.getElementById('body').style.background = '#b6bcca';
}