import React, { useEffect } from 'react';
import { gantt } from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import './Gantt.css';

const Gantt = (props, ganttContainer) => {

  
  useEffect(() => {
    gantt.config.date_format = "%Y-%m-%d %H:%i"; 
    gantt.config.order_branch = true 

    // Smart rendering *
    // The smart rendering functionality allows significantly enhancing the speed of data visualization, 
    // especially while working with big data sets. This mode is responsible for rendering only the elements visible on the screen at the moment.
    gantt.config.static_background = true  

    // progress_text onchange
    gantt.templates.task_text = function (start, end, task) {
      return "";
    };
    
    gantt.locale.labels["complete_button"] = "Complete";
    gantt.config.buttons_right = ["dhx_delete_btn","complete_button"];
    gantt.config.buttons_left = ["dhx_save_btn", "dhx_cancel_btn"];
    
    gantt.attachEvent("onLightboxButton", function (button_id, node, e) {
      if (button_id === "complete_button") {
        console.log('Complete button pressed')
      }
    });
   
	  gantt.config.add_column = false;
    gantt.config.columns = [
      {name: "text", label: myFunc('Task ID'), tree: true, width: '*', min_width: 180},
      {name: "taskNo", label: myFunc('Task No'), align: "center", width: '*'},
      {name: "task", label: myFunc('Tasks'), align: "center", width: 500,min_width: 180},
      {
        name: "effort", label:myFunc('Effort'), width: 35, align: "center",
        template: function (item) {
          return Math.round(item.effort) + "%";
        }
      },
      {
        name: "progress", label: myFunc('Progress'), width: 60, align: "center",
        template: function (item) {
          return Math.round(item.progress * 100) + "%";
        }
      },
      {name: "predecessor", label: myFunc('Predecessor'),width: '*', align: "center",min_width: 150, 
    }
    ];
    function myFunc(task) {
      if (task.predecessor !== 'Predecessor') {
            return "<div style='color: blue; font-weight:bold;'>" + task + "</div>";
      }
    }
    const { tasks } = props;
    gantt.init(ganttContainer);
    gantt.silent(()=>{gantt.parse(tasks);});
    gantt.render();
  }, [])
  

  return (
    <div
        ref={ (input) => { ganttContainer = input } }
        style={ { width: '100%', height: '100%' } }
    ></div>
  )
}

export default Gantt
