function openPopup(project) {
    const popup = document.getElementById('popup');
    
    
    if (project === 'project1') {
        document.getElementById('popup-title').innerText = 'Summary';
        document.getElementById('popup-description').innerText = 'The process begins by understanding the projects vision of giving undiscovered talent a digital stage. the website structure is built with HTML elements like <div>, <header>, and <footer>, forming the foundation for the artists profiles. These profiles come to life through HTML, with biographies, images, and audio tags showcasting the artists stories and music.';
    } 

    popup.style.display = 'flex'; 
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none'; 
}