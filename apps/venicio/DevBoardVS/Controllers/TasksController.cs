using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Npgsql;

namespace DevBoardVS.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public TasksController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var tasks = new List<object>();

            var connString = _configuration.GetConnectionString("DefaultConnection");
            using var conn = new NpgsqlConnection(connString);
            conn.Open();

            using var cmd = new NpgsqlCommand("SELECT id, description, done FROM tasks", conn);
            using var reader = cmd.ExecuteReader();

            while (reader.Read())
            {
                tasks.Add(new
                {
                    id = reader.GetInt32(0),
                    description = reader.GetString(1),
                    done = reader.GetBoolean(2)
                });
            }

            return Ok(tasks);
        }
    }
}
