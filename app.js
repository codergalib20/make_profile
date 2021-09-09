const nameFiled = document.querySelector('.nameFiled');
const ageFiled = document.querySelector('.ageFiled');
const profeFiled = document.querySelector('.professionFiled');
const commentFiled = document.querySelector('.commentFiled');
const profiles = document.getElementById('profile');
const gendarName = document.getElementById('gendarFiled')

document.querySelector('.submit-btn').addEventListener('click', () => {
    let img;
    if (gendarName.value === 'male') {
        img = 'male.jpg'
    }else if (gendarName.value === 'female') {
        img = 'female.jpg'
    } else if (gendarName.value === 'other') {
        img = 'other.jpg'
    } else {
        alert('Please Selected your gendar')
        return;
    }
    if (nameFiled.value === '' || ageFiled.value === '' || commentFiled.value === '') {
        alert('Please type your info');
        return;
    }
    const profData = {
        name: nameFiled.value,
        age: ageFiled.value,
        profession: profeFiled.value,
        comment: commentFiled.value
    };
    const formatedText = formatText(profData.name,profData.age, profData.profession, profData.comment, img);
    nameFiled.value = '';
    ageFiled.value = '';
    profeFiled.value = '';
    commentFiled.value = '';
    gendarName.value = '';
})
function formatText(name, age, profession, comment, img) {
    profiles.innerHTML = `
     <div class="profile">
        <div class="img">
        <img src="${img}" />
        </div>
        <h1 class="name">${name}</h1>
        <h3 class="age">${age}</h3>
        <h5 class="profession">${profession}</h5>
        <p class="comment">${comment}</p>
     </div>
    `;
}
