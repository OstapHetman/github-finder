class GitHub {
    constructor() {
        this.client_id = '95b31066b10644789b84';
        this.client_secret = '5ca6818ed2fbf250603f1280ae791997ddeb1985';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}