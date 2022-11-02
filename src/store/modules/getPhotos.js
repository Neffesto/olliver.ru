import axios from 'axios'
export default ({
    state: {
        time: 5000,
        dataPhotos: [],
        url: [],
        message: 'Каких либо фотографий не загружено',
        show: false
    },
    getters: {
        url(state) {
            return state.url
        },
        time(state) {
            return state.time
        },
        message(state) {
            return state.message
        },
        show(state) {
            return state.show
        }
    },
    mutations: {
        getParsePhoto(state) {
            if (localStorage.key('receivedPhotos')) {
                state.dataPhotos.pop()
                state.dataPhotos.push(JSON.parse(localStorage.getItem('receivedPhotos')))
                state.url = []
                for (let i = 0; i < state.dataPhotos[0].length; i++) {
                    state.url.push(state.dataPhotos[0][i].url)
                }
                state.message = 'Загружено'+ ' ' + state.url.length + ' ' +'фотографий.'
                state.show = true
            }
        }
    },
    actions: {
        getPhotos(context) { axios
            .get('https://jsonplaceholder.typicode.com/albums/1/photos?_limit=15')
            .then(function (response) {
                localStorage.setItem('receivedPhotos', JSON.stringify(response.data))
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                context.dispatch('startParse')
            });
        },
        startParse ({commit}) {
            commit('getParsePhoto')
        }
    }
})