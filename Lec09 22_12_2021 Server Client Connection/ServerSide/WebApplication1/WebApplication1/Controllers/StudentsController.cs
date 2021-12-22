using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class StudentsController : ApiController
    {
        public IHttpActionResult Get()
        {
            try
            {
                return Ok(StudentDBMOCK.students);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
                //return Content(HttpStatusCode.BadRequest , ex);
            }
        }

        public IHttpActionResult Get(int id)
        {
            try
            {
                Student stu2Find = StudentDBMOCK.students.FirstOrDefault(stu => stu.Id == id);
                if (stu2Find == null)
                {
                    return Content(HttpStatusCode.NotFound,
                        $"student with id={id} was not found to return in GET!!!");
                }
                return Ok(stu2Find);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        public IHttpActionResult Post([FromBody] Student value) 
        {
            try
            {
                StudentDBMOCK.students.Add(value);
                return Created(new Uri(Request.RequestUri.AbsoluteUri  + value.Id), value);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        public IHttpActionResult Put(int id, [FromBody] Student value) 
        {
            try
            {
                Student stu2Update = StudentDBMOCK.students.FirstOrDefault(stu=>stu.Id==id);
                if (stu2Update !=null)
                {
                    stu2Update.Name = value.Name;
                    stu2Update.Grade = value.Grade;
                    return Ok(stu2Update);
                }
                return Content(HttpStatusCode.NotFound,
                        $"student with id={id} was not found to update!!!");

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        public IHttpActionResult Delete(int id) 
        {
            try
            {
                Student stu2Del = StudentDBMOCK.students.FirstOrDefault(stu=> stu.Id==id);
                if (stu2Del !=null)
                {
                    StudentDBMOCK.students.Remove(stu2Del);
                    return Ok();
                }
                return Content(HttpStatusCode.NotFound, $"student with id={id} was not found 2 del!!!");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            } 
        }
    }
}
