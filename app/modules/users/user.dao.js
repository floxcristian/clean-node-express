'use strict';

const pool = require('../database');

const getUsers = async (props) => {
  const { role, status, pageSize, page } = props;
  const from = (page - 1) * pageSize;
  /*const text = `
            SELECT u.id_user, u.name, u.last_name, u.middle_name, u.document, u.email, u.phone, u.username, u.active, u.profile_image, u.created_at, u.updated_at, r.roles
            FROM users AS u 
            INNER JOIN (
                SELECT id_user, array_agg(role ORDER BY role) AS roles 
                FROM roles 
                GROUP BY id_user 
                HAVING ($1::int IS NULL OR $1 = ANY(array_agg(role)))
                ORDER BY id_user
            ) AS r 
            ON u.id_user = r.id_user
            WHERE ($2::bool IS NULL OR u.active = $2)
            ORDER BY id_user 
            LIMIT $3 
            OFFSET $4`;*/
  const values = [role, status, pageSize, from];
  return (await pool.query(text, values)).rows;
};

const createUser = async (userInfo) => {
  const {} = userInfo;
};

const deleteUser = async (userId) => {
  const text = 'DELETE FROM users WHERE id_user = $1';
  const values = [userId];
  return await pool.query(text, values);
};

module.exports = {
  getUsers,
  createUser,
  deleteUser
};
