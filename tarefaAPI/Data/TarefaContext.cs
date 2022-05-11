using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TarefaAPI.Model;

namespace TarefaAPI.Data
{

    public class TarefaContext : DbContext
    {

        public DbSet<Tarefa> Tarefas { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=TarefaDb;Trusted_Connection=true;");
        }

    }
}
