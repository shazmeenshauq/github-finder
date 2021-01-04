const github = new Github;
const ui = new UI;

// Search Input

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup' , (e) => {
    // Get input text

    const userText = e.target.value; 
    if(userText !== ''){
    //    Make http call

    github.getUser(userText).then (data =>{
        if(data.profile.message === 'Not Found'){
            // show error

            ui.showAlert('User not found' , 'alert alert-danger');


        } else {
            // show profile

            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
        }
    });
    } else {
        // Clear everything
        ui.clearProfile();
    }
});