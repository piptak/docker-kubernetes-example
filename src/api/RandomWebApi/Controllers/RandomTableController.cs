using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RandomDataProject;

namespace RandomWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RandomTableController : ControllerBase
    {
        private readonly AppContext _context;

        public RandomTableController(AppContext context)
        {
            _context = context;
        }

        [Route("")]
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var data = await _context.RandomTables.ToListAsync();
            return Ok(data);
        }
    }
}