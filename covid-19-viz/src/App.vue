<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col text-center mt-5">
        <h1>COVID-19 Data Visualization</h1>
      </div>
    </div>

    <div class="row mt-5" v-if="casesByCountry.length > 0">
      <div class="col">
        <h2>Cases - {{ casesByCountry[0].date }}</h2>
        <line-chart 
          :chartData="casesByCountry" 
          :options="chartOptions" 
        ></line-chart>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

// Components
import LineChart from './components/LineChart';

export default {
  name: 'App',
  data() {
    return {
      casesByCountry: [],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          zoom: {
            pan: { enabled: true, mode: 'xy' },
            zoom: { enabled: true, mode: 'xy' },
          }
        }
      },
    }
  },
  components: {
    LineChart
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

<style scoped>

</style>
