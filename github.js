class Github {
    constructor () {
        this.client_id = 'aeaa5c412c5df7fe0810';
        this.client_secret = '95e0d504d42110f77c511db26581239cb057fc16';
        this.repos_count = 5;
        this.repos_sort = 'created : asc';
    }


    async getUser (user) {

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);



        
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }

    }
}

