import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {data} = props

  return (
    <div className="vaccination-by-gender-container">
      <h1 className="component-title">Vaccination by gender</h1>
      <ResponsiveContainer height={400}>
        <PieChart width={800} height={400}>
          <Pie
            data={data.vaccination_by_gender}
            cx="50%"
            cy="50%"
            startAngle={180}
            endAngle={0}
            innerRadius={50}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
