import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {data} = props

  const updatedData = {
    vaccinationByAge: data.vaccination_by_age,
  }

  //   console.log({data})
  //   console.log(data.vaccination_by_age[0].age)
  //   console.log(data.vaccination_by_age[1].age)
  //   console.log(data.vaccination_by_age[2].age)
  return (
    <div className="vaccination-by-age-container">
      <h1 className="component-title">Vaccination by Age</h1>
      <ResponsiveContainer height={400}>
        <PieChart width={800} height={400}>
          <Pie
            data={updatedData.vaccinationByAge}
            cx="50%"
            cy="50%"
            labelLine={false}
            label="Hello"
            outerRadius={100}
            fill="#8884d8"
            dataKey="count"
          >
            <Cell name={updatedData.vaccinationByAge[0].age} fill="#5a8dee" />
            <Cell name={updatedData.vaccinationByAge[1].age} fill="#a3df9f" />
            <Cell name={updatedData.vaccinationByAge[2].age} fill="#64c2a6" />
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

export default VaccinationByAge
