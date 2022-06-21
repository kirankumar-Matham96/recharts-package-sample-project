import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {data} = props

  const updatedData = {
    vaccinationByGender: data.vaccination_by_gender,
  }

  return (
    <div className="vaccination-by-gender-container">
      <h1 className="component-title">Vaccination by gender</h1>
      <ResponsiveContainer height={400}>
        <PieChart width={800} height={400}>
          <Pie
            data={updatedData.vaccinationByGender}
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
            <Cell
              name={updatedData.vaccinationByGender[0].gender}
              fill="#f54394"
            />
            <Cell
              name={updatedData.vaccinationByGender[1].gender}
              fill="#5a8dee"
            />
            <Cell
              name={updatedData.vaccinationByGender[2].gender}
              fill="#2cc6c6"
            />
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
