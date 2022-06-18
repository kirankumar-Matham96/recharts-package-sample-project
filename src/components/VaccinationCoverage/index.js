import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {data} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="vaccination-coverage-container">
      <h1 className="component-title">Vaccination Coverage</h1>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          width={500}
          height={300}
          data={data.last_7_days_vaccination}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="vaccine_date" />
          <YAxis tickFormatter={DataFormatter} />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="dose_1"
            name="dose 1"
            fill="#5a8dee"
            barSize="20%"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="dose_2"
            name="dose 2"
            fill="#f54394"
            barSize="20%"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
