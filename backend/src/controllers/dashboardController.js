// // const db ("../db");
import db from "../lib/db.js";

// // export const getMonthlyBudget = (req, res) => {



// export const getMonthlyBudget = async (req, res) => {
//     try{
//         const {year} = req.params;
//         console.log("REQ.USER:", req.user);
//         const role = req.user.role;

//         let sql =`
//         SELECT month, SUM(metric_value) AS total_budget
//         FROM records_real_data
//         WHERE year = ?
//         AND metric_name = 'Total Budget (INR)'`;

//         const params = [year];
//         if(role !== "DC_Admin"){
//             sql += " AND department_name = ?";
//             params.push(role);
//         }

//         sql += " GROUP BY month ORDER BY month";

//         const [rows] = await db.query(sql, params);
//         res.json(rows);


//     }catch(err){
//         console.error("DB Error:", err);
//         res.status(500).json({error:err.message});
       
//     }
// }




// export const getYearComparison = async (req, res) => {
//     try{
//         const role = req.user.role;

//         let sql = `SELECT year, SUM(metric_value) AS total_budget
//         FROM records_real_data
//         WHERE metric_name  = 'Total Budget (INR)'`;
//         const params = []
//         if(role !== "DC_Admin"){
//             sql += " AND department_name = ?";
//             params.push(role);

        
//         }

//         sql += " GROUP BY year ORDER BY year";

//         const [rows] = await db.query(sql, params);
//         res.json(rows);

//     }
//     catch(err){
//        console.error("DB Error:", err);
//         res.status(500).json({error:err.message});
       
//     }
// };



// export const getTopDepartments = async (req, res) => {
//     try {
//         const {year} = req.params;
//         const role = req.user.role;

//         let sql = `SELECT department_id, SUM(metric_value) AS total_budget
//         FROM records_real_data
//         WHERE year = ?
//         AND metric_name = 'Total Budget (INR)'`;
        
//         const params = [year];
//         if (role !== "DC_Admin"){
//             sql += " AND department_name = ?";
//             params.push(role);
//         }

//         sql += `
//         GROUP BY department_name
//         ORDER BY total_budget DESC
//         LIMIT 10`;

//         const [rows]= await db.query(sql, params);
//         res.json(rows);

        
//     } catch (error) {
//        console.error("DB Error:", err);
//         res.status(500).json({error:err.message});
       
        
//     }
// };



export const getMonthlyBudget = async (req, res) => {
  try {
    const { year } = req.params;
    const role = req.user.role.trim();
    console.log(role)

    let sql = `
      SELECT r.month, SUM(r.metric_value) AS total_budget
      FROM records_real_data r
      JOIN departments d ON r.department_id = d.department_id
      WHERE r.year = ?
      AND r.metric_name = 'Total Budget (INR)'
    `;

    const params = [year];

    if (role !== "DC_Admin") {
      sql += " AND d.name = ?";
      params.push(role);
    }

    sql += " GROUP BY r.month ORDER BY r.month";

    const [rows] = await db.query(sql, params);
    res.json(rows);

  } catch (err) {
    console.error("DB Error:", err);
    res.status(500).json({ error: err.message });
  }
};

export const getYearComparison = async (req, res) => {
  try {
    const role = req.user.role.trim();

    let sql = `
      SELECT r.year, SUM(r.metric_value) AS total_budget
      FROM records_real_data r
      JOIN departments d ON r.department_id = d.department_id
      WHERE r.metric_name = 'Total Budget (INR)'
    `;

    const params = [];

    if (role !== "DC_Admin") {
      sql += " AND d.name = ?";
      params.push(role);
    }

    sql += " GROUP BY r.year ORDER BY r.year";

    const [rows] = await db.query(sql, params);
    res.json(rows);

  } catch (err) {
    console.error("DB Error:", err);
    res.status(500).json({ error: err.message });
  }
};


export const getTopDepartments = async (req, res) => {
  try {
    const { year } = req.params;
    const role = req.user.role.trim();

    let sql = `
      SELECT d.name AS department_name, 
             SUM(r.metric_value) AS total_budget
      FROM records_real_data r
      JOIN departments d ON r.department_id = d.department_id
      WHERE r.year = ?
      AND r.metric_name = 'Total Budget (INR)'
    `;

    const params = [year];

    if (role !== "DC_Admin") {
      sql += " AND d.name = ?";
      params.push(role);
    }

    sql += `
      GROUP BY d.name
      ORDER BY total_budget DESC
      LIMIT 10
    `;

    const [rows] = await db.query(sql, params);
    res.json(rows);

  } catch (err) {
    console.error("DB Error:", err);
    res.status(500).json({ error: err.message });
  }
};