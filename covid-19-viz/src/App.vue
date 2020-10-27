<template>
  <div id="app">

  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  name: 'App',
  data() {
    return {
      casesByCountry: [],
    }
  },
  components: {

  },
  async created() {
    const { data } = await axios.get('https://api.covid19api.com/summary');
    // console.log(data);
    const date = moment(data.Date, 'YYYY-MM-DD').format('YYYY/MM/DD');

    data.Countries.map(country => {
      const { Country, NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered } = country;

      this.casesByCountry.push({
        date: date,
        country: Country,
        newConfirmed: NewConfirmed,
        newDeaths: NewDeaths,
        newRecovered: NewRecovered,
        totalConfirmed: TotalConfirmed,
        totalDeaths: TotalDeaths,
        totalRecoverd: TotalRecovered,
      });
    });

    console.log(this.casesByCountry)
  }
}
</script>

<style>

</style>
