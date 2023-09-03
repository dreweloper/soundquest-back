const { Schema, model } = require('mongoose');

/**
 * Data schema to represent a visit record in the app.
 * @type {Object}
 * @property {Object} location - Location of an IP address.
 * @property {String} location.ip - The IP address.
 * @property {String} location.network - The network information.
 * @property {String} location.version - The IP version (e.g., "IPv4" or "IPv6").
 * @property {String} location.city - The city.
 * @property {String} location.region - The region or state.
 * @property {String} location.region_code - The region code (e.g., "CT" for Catalonia).
 * @property {String} location.country - The country code (e.g., "ES" for Spain).
 * @property {String} location.country_name - The full name of the country (e.g., "Spain").
 * @property {String} location.country_code - The ISO country code (e.g., "ES").
 * @property {String} location.country_code_iso3 - The ISO3 country code (e.g., "ESP").
 * @property {String} location.country_capital - The capital city (e.g., "Madrid").
 * @property {String} location.country_tld - The top-level domain (e.g., ".es").
 * @property {String} location.continent_code - The continent code (e.g., "EU" for Europe).
 * @property {Boolean} location.in_eu - Indicates whether the country is in the European Union.
 * @property {String} location.postal - The postal code.
 * @property {Number} location.latitude - The latitude coordinate.
 * @property {Number} location.longitude - The longitude coordinate.
 * @property {String} location.timezone - The timezone (e.g., "Europe/Madrid").
 * @property {String} location.utc_offset - The UTC offset (e.g., "+0200").
 * @property {String} location.country_calling_code - The international calling code (e.g., "+34").
 * @property {String} location.currency - The currency code (e.g., "EUR" for Euro).
 * @property {String} location.currency_name - The full name of the currency (e.g., "Euro").
 * @property {String} location.languages - The languages spoken (comma-separated list).
 * @property {Number} location.country_area - The total area in square kilometers.
 * @property {Number} location.country_population - The population.
 * @property {String} location.asn - The Autonomous System Number (ASN).
 * @property {String} location.org - The organization or company (e.g., "Xtra Telecom S.A.").
 */
const visitSchema = new Schema({

    location: {
        type: Object
    }

}, { timestamps: true });


module.exports = model('Visit', visitSchema);