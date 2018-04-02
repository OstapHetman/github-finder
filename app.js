// Init giithub

const github = new GitHub;
// Search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', e => {
    // Get input Text   
    const userText = e.target.value;

    if (userText !== '') {
        // Make HTTP call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // Show alert


                } else {
                    // Show profile

                }
            })
    } else {
        // Clear a profile
    }
});