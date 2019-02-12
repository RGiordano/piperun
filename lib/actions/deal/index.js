/**
 * Action handler
 *
 * @param {object} plg - Pluga developer platform toolbox.
 * @param {object} plg.axios - [axios](https://github.com/axios/axios)
 *
 * @param {object} event - Event bundle to handle.
 * @param {object} event.meta - Pluga event meta data.
 * @param {string} event.meta.baseURI - Environment base URI.
 * @param {object} event.auth - Your app.json auth fields.
 * @param {object} event.input - Your meta.json fields.
 *
 * @returns {Promise} Promise object represents an array of resources to handle.
 */

exports.handle = async (plg, event) => {
    const data = Object.assign({}, event.input);

    return plg.axios({
        baseURL: event.meta.baseURI,
        url: `deals`,
        method: 'POST',
        headers: {
            Token: `${event.auth.token}`,
        },
        data: data
    }).then(res => res.data.data).catch((err) => {
        throw (err.response.status === 422) ? err.response.data.data : err;
    });
}