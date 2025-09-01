// import { tasks } from "/Users/dasay/Documents/Documents/WEB DEVELOPMENT HTML/WEB Small Projects/Tiffin Item/Index.js";


  var data = JSON.parse(localStorage.getItem("ItemDetails")) || []; //one way
console.log("data:-",data);







// function add(a,b){
//     var c=a+b;
//     return c;
// }








var marginright=0,marginrleft=0;
var Color1=[255, 242, 230];
var Color2=[255, 215, 179];
var C1=10,C2=12,C3=22+4,C4=23-2,C5=23-2,C6=10;

var TotalAmount=0;




function  BackgroundColor(doc,data){
    
    // doc.setFillColor(...Color1); 
    // doc.rect(0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, 'F'); 
}
function InvoiceHeaderTable(doc,data){
  
    doc.setFillColor(...Color1); 
    doc.rect(0, 0, doc.internal.pageSize.width, 50.47333333333333, 'F'); // doc.internal.pageSize.height //50.47333333333333 //top to body

    doc.rect(0, 0, marginrleft, doc.internal.pageSize.height, 'F'); // //left side top to bottom 
    doc.rect((doc.internal.pageSize.width)-marginright, 0, marginright, doc.internal.pageSize.height, 'F'); //   //left side top to bottom 


  
    var cellcount=1;
    doc.autoTable({
      startY: 10,
      margin: {
        right: marginright,
        left: marginrleft,
        top: 10
      },
      theme: 'plain',
     
      body:[
        {  
  
            type1:{content: '', styles: { halign: 'left', font: 'proximaNovaBold', fontStyle: 'bold', }},
            type2:{content: 'HANDOVER AND TYKE', styles: { halign: 'left', font: 'proximaNovaBold', fontStyle: 'bold', }},
            type3:{content: '     INVOICE', styles: { halign: 'center', font: 'proximaNovabold', fontStyle: 'plain' },rowSpan:3 },
           
  
          },
          { 
  
            type1:{content: '', styles: { halign: 'left', font: 'proximaNovaBold', fontStyle: 'bold', }},
            type2:{content: 'T +123-456-7890', styles: { halign: 'left', font: 'proximaNovaBold', fontStyle: 'bold', }},
            type3:{content: '', styles: { halign: 'center', font: 'proximaNovaBold', fontStyle: 'bold' } },
           
  
          },
          { 
  
            type1:{content: '', styles: { halign: 'left', font: 'proximaNovaBold', fontStyle: 'bold', }},
            type2:{content: 'P : @WEBSITE.COM', styles: { halign: 'left', font: 'proximaNovaBold', fontStyle: 'bold', }},
            type3:{content: '', styles: { halign: 'center', font: 'proximaNovaBold', fontStyle: 'bold' } },
           
  
          },
         
         ] ,
  
      bodyStyles: {
        valign: 'middle',
        halign: 'left',
        font: 'proximaNova',
        cellPadding: 0.5,
        fontStyle: 'plain',
        fontSize: 8,
        lineWidth:0.,
        lineColor:[0,0,0]
      },
      columnStyles : {
        type1 :{cellWidth : 20},
        type2 :{cellWidth : 40},
        type3 :{cellWidth : 40,fontSize:23},
       
    },
    didDrawCell: function (data) {
       
         
      var doc = data.doc;
      var cell = data.cell;
      var lineWidth = 0.;
      var lineColor = [0, 0, 0];
     
  
      doc.setLineWidth(lineWidth);
      doc.setDrawColor(...lineColor);
      
      
            
      if(cellcount==1||cellcount==4||cellcount==6){
       
        doc.line(cell.x+18,cell.y,cell.x+18,cell.y+cell.height);
        doc.line(cell.x+20,cell.y,cell.x+20,cell.y+cell.height);
  
            
           
           
            
       }
  
  
      cellcount++;
      
      }
      
    });
  
  
  
  
  var body1=doc.previousAutoTable.finalY;
  
  
  body1=body1+5
  
    doc.autoTable({
      startY: body1,
      margin: {
        right: marginright,
        left: marginrleft,
        top: body1
      },
      theme: 'plain',
     
      body:[
        {  
  
            type1:{content: 'Billing To:    ', styles: {  font: 'proximaNovaBold', fontStyle: 'bold', }},
            type2:{content: 'Ms.kyrie Petrakis', styles: { halign: 'left', font: 'proximaNovaBold', fontStyle: 'bold', }},
            type3:{content: 'Invoice: 2031-001', styles: {  font: 'proximaNovaBold', fontStyle: 'bold' } },
           
  
          },
          { 
  
            type1:{content: '', styles: {  font: 'proximaNovaBold', fontStyle: 'bold', }},
            type2:{content: 'Billing Section', styles: { halign: 'left', font: 'proximaNovaBold', fontStyle: 'bold', }},
            type3:{content: 'custom Marketing Collateral', styles: {  font: 'proximaNovaBold', fontStyle: 'bold' } },
           
  
          },
          { 
  
            type1:{content: '', styles: {  font: 'proximaNovaBold', fontStyle: 'bold', }},
            type2:{content: 'Salford Company', styles: { halign: 'left', font: 'proximaNovaBold', fontStyle: 'bold', }},
            type3:{content: '25th of September', styles: {  font: 'proximaNovaBold', fontStyle: 'bold' } },
           
  
          },
         
         ] ,
  
      bodyStyles: {
        valign: 'middle',
        halign: 'left',
        font: 'proximaNova',
        cellPadding: 0.5,
        fontStyle: 'plain',
        fontSize: 8,
        lineWidth:0.,
        lineColor:[0,0,0]
      },
      columnStyles : {
        type1 :{cellWidth : 25,halign:'right'},
        type2 :{cellWidth : 35},
        type3 :{cellWidth : 40,halign:'left'},
       
    },
  
   
      
    });
 
  
    }
var totalPageCount=0;
var itemArr=[];
function InvoiceBodyTable(doc,CopyName,data){
var totalPageCount=0;
itemArr=[];



// Obj.type1={content: 'PARTICULARS 1', styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: 50, }},
// Obj.type2={content: '53.00', styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: 20 } },
// Obj.type3={content: '30', styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: 25, } },
// Obj.type4={content: '900.00', styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: 25 }, }

// itemArr.push(Obj);
// for(var i=0;i<20;i++){
//     var Obj={};
//         Obj.typeGL={content: "", styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C1,halign:'left' }},
//         Obj.type1={content: i+1, styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C2,halign:'left' }},
//         Obj.type2={content: "ABC", styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth:C3,halign:'center' } },
//         Obj.type3={content: '29/08/2025', styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C4,halign:'center' } },
//         Obj.type4={content: '900.00', styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C5,halign:'center' }, },
//         Obj.typeGR={content: "", styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C6,halign:'left' }},

//         itemArr.push(Obj);
        
// }
console.log("data:-",data);
var invdetails=data.length;
console.log("invdetails:-",invdetails);
for(var i=0;i<invdetails;i++){
    var Obj={};
        Obj.typeGL={content:"", styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C1,halign:'left' }},
        Obj.type1={content: i+1, styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C2,halign:'left' }},
        Obj.type2={content:  data[i].TaskName, styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth:C3,halign:'center' } },
        Obj.type3={content: data[i].CreateDate, styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C4,halign:'center' } },
        Obj.type4={content: data[i].Amt, styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C5,halign:'center' }, },
        Obj.typeGR={content: "", styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C6,halign:'left' }},

        TotalAmount=TotalAmount+parseFloat(data[i].Amt);
        itemArr.push(Obj);
        
}

          
  
        
          
  
        
          
         

var startTab=doc.previousAutoTable.finalY;
startTab=startTab+10;
console.log("startTab:-",startTab);
StartTabCopy=startTab;
    doc.autoTable({
        startY: startTab, 
        margin: {
            right: marginright,
            left: marginrleft,
            top: startTab, 
            bottom: 40
        },
        theme: 'plain',
        head: [{ 
                typeGL:{content: "", styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C1,halign:'left' }},
                type1:{content: 'Sl No', styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C2,halign:'left' }},
                type2:{content: 'Item Name', styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C3,halign:'center' } },
                type3:{content: 'Date', styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C4,halign:'center' } },
                type4:{content: 'AMOUNT', styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C5 ,halign:'center'}, },
                typeGR:{content: "", styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C6,halign:'left' }},

              
      
            
        }],
        body: itemArr,
        // rowPageBreak: 'avoid',
        didDrawPage: function (dataTable, cell) {
            // HeaderCell=true;
            cellcount=1;
            // console.log("dataTable:-",dataTable);
            // doc.setFillColor(...Color1); 
            // doc.rect(0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, 'F'); 
            totalPageCount++;
       
            var pageNo = doc.internal.getNumberOfPages();
            if (totalPageCount > 1) {

                // BackgroundColor(doc);
                InvoiceHeaderTable(doc, CopyName,  data);
                // if(totalPageCount<2){

                // }


            }

            var finalY1 = doc.previousAutoTable.finalY;
            var cou = 0, count = 0, newCount = 0;
      

            if (totalPageCount == dataTable.pageNumber) {
                countLen = parseInt(dataTable.table.body.length);
                if (countLen > 0) {
                    try {
                        newCount = (dataTable.table.body[countLen - 2].y == null || dataTable.table.body[countLen - 2].y == undefined) ? dataTable.table.body[countLen - 2].y : dataTable.table.body[countLen - 1].y;
                     
                    }
                    catch (err) {
                        console.log(err.message);
                    }
                   
                }
            //    console.log("newCount:-",newCount);


                if (newCount == undefined) {
                
                 
                    InvoiceFooterTable(doc,data);


                }
             
            }
        },willDrawCell: function (data) {
            // console.log("data:-",data);

            const cell = data.cell;
            const doc = data.doc;
            const pageNumber = doc.internal.getNumberOfPages();
            const lines = data.cell.text;

            var lineWidth = 0.2;
            var lineColor = [0,0,0];
      
            doc.setLineWidth(lineWidth);
            doc.setDrawColor(...lineColor);
            // doc.line(cell.x, cell.y, cell.x , cell.y+cell.height );
            // doc.line(cell.x, cell.y+itemHeadCellHeight, cell.x+cell.width , cell.y+itemHeadCellHeight );

           // Update last Y on the current page
       
            totalcellheight = cell.y + cell.height;
            var ColumnsLength=Object.keys(data.row.cells).length;
            // console.log("data.row.cells:-",data.row.cells);

            // console.log("ColumnsLength:-",ColumnsLength);
            // alert(ColumnsLength);
            // if(HeaderCell==true){
                
            // for(var c=0;c<ColumnsLength;c++ ){
                if(cellcount==1 ){
                        var topLeft = [0, cell.y]; 
                        doc.setDrawColor(255, 215, 179);
                        doc.setFillColor(255, 215, 179);
                        doc.lines(
                            [
                                  [cell.x+cell.width, 0],    // to topRight  
                                  [0,cell.height ],   // to bottomRight
                                  [-cell.width,0],  // to bottomLeft
                                  [0,-cell.height],  // back to topLeft
                    
                    
                    
                    
                                ],
                                topLeft[0],
                                topLeft[1],
                                [1, 1],
                                'FD',        // Fill and stroke
                                true         // Close path
                              );
                    }else if(cellcount==2 ){
                        var topLeft = [cell.x, cell.y]; 

                        doc.setDrawColor(255, 215, 179);
                        doc.setFillColor(255, 215, 179);
                        doc.lines(
                            [
                                  [cell.width, 0],    // to topRight  
                                  [0,cell.height ],   // to bottomRight
                                  [-cell.width,0],  // to bottomLeft
                                  [0,-cell.height],  // back to topLeft
                    
                    
                    
                    
                                ],
                                topLeft[0],
                                topLeft[1],
                                [1, 1],
                                'FD',        // Fill and stroke
                                true         // Close path
                              );
                    }else if(cellcount==3 ){
                        var topLeft = [cell.x, cell.y]; 

                        doc.setDrawColor(255, 215, 179);
                        doc.setFillColor(255, 215, 179);
                        doc.lines(
                            [
                                  [cell.width-5, 0],    // to topRight  
                                  [10,cell.height ],   // to bottomRight
                                  [-5-cell.width,0],  // to bottomLeft
                                  [0,-cell.height],  // back to topLeft
                    
                    
                    
                    
                                ],
                                topLeft[0],
                                topLeft[1],
                                [1, 1],
                                'FD',        // Fill and stroke
                                true         // Close path
                              );
                    }
                    HeaderCell=false;
                   
                  
    
                // }
            // console.log("totalcellheight1:-",totalcellheight);
            cellcount++;
        },
        
        headStyles: {
            valign: 'middle',
            halign: 'left',
            font: 'proximaNovaBold',
            cellPadding: 5,
            fontStyle: 'bold',
            fontSize: 8,
            lineWidth:0.,
            lineColor:[0,0,0],
            // fillColor:Color2,
            // fillColor:[255,255,255]


          },
        bodyStyles: {
            valign: 'middle',
            halign: 'left',
            font: 'proximaNova',
            cellPadding: 5,
            fontStyle: 'plain',
            fontSize: 8,
            lineWidth:0.,
            lineColor:[0,0,0],
            // fillColor:Color1,
            fillColor:[255, 255,255],

            
          },
          alternateRowStyles :{
            // fillColor:[255, 255,255],
            fillColor:[255, 242, 230],


          }
         
    });

  
}
var StartTabCopy=0,totalcellheight=0,lastTab=0;  
var HeaderCell=true;
var cellcount=1;
function  InvoiceFooterTable(doc,data){

    // var lastTab=doc.previousAutoTable.finalY;
    lastTab=169.9;
    

    doc.autoTable({
        startY: StartTabCopy,
        margin: {
          right: marginright,
          left: marginrleft,
          top: StartTabCopy
        },
        theme: 'plain',
       
        body:[{ 
              typeGL:{content: "", styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C1,halign:'left' }},
              type1:{content: '', styles: { halign: 'left', font: 'proximaNova', fontStyle: 'italic', cellWidth: C2, }},
              type2:{content: '', styles: { halign: 'center', font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C3 } },
              type3:{content: '', styles: { halign: 'left', font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C4, } },
              type4:{content: '', styles: { halign: 'center', font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C5 }, },
              typeGR:{content: "", styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C6,halign:'left' }},

        }] ,
    
        bodyStyles: {
          valign: 'middle',
          halign: 'left',
          font: 'proximaNova',
          cellPadding: 5,
          fontStyle: 'plain',
        //   fontSize: 10, //10
          lineWidth:0.,
          lineColor:[0,0,0],
          minCellHeight: lastTab-StartTabCopy
        },didDrawCell: function (data) {
            // console.log("data for diddrawcell:-",data);
            const cell = data.cell;
            const doc = data.doc;
            const pageNumber = doc.internal.getNumberOfPages();
            const lines = data.cell.text;

            var lineWidth = 0.2;
            var lineColor = [0,0,0];
      
            doc.setLineWidth(lineWidth);
            doc.setDrawColor(...lineColor);
            // doc.line(cell.x, cell.y, cell.x , cell.y+cell.height );

            // doc.line(cell.x+cell.width, cell.y, cell.x+cell.width , cell.y+cell.height );

            var ColumnsLength=Object.keys(data.row.cells).length;
            // console.log("data.row.cells:-",data.row.cells);

            // console.log("ColumnsLength:-",ColumnsLength);
            // alert(ColumnsLength);
            // if(HeaderCell==true){

            doc.setLineWidth(lineWidth);
            doc.setDrawColor(...lineColor);
                for(var c=0;c<ColumnsLength;c++ ){
                    // doc.line(cell.x, cell.y, cell.x+cell.width , cell.y );
    
                }
            // }
            // HeaderCell=false;

            // doc.line(cell.x, cell.y+itemHeadCellHeight, cell.x+cell.width , cell.y+itemHeadCellHeight );

           // Update last Y on the current page
       
            totalcellheight = cell.y + cell.height;
            // console.log("totalcellheight1:-",totalcellheight);
        },
     });
     InvoiceFooterTableBackgrounfColor(doc,data);

     
     var TotalTab=doc.previousAutoTable.finalY;
var cellcountA=1;
    doc.autoTable({
    startY: TotalTab,
    margin: {
        right: marginright,
        left: marginrleft,
        top: TotalTab
    },
    theme: 'plain',
    body:[{ 
            typeGL:{content: "", styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C1,halign:'left' }},
            type1:{content: 'Thank you for  trusting!', styles: { halign: 'left', font: 'proximaNova', fontStyle: 'italic',fontSize:12, cellWidth:C2+C3 }},
            // type2:{content: '', styles: { halign: 'center', font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C3 } },
            type3:{content: 'Amount', styles: { halign: 'left', font: 'proximaNovaBold', fontStyle: 'bold', cellWidth:C4 , } },
            type4:{content: TotalAmount.toFixed(2), styles: { halign: 'center', font: 'proximaNovaBold', fontStyle: 'bold', cellWidth:C5 }, },
            typeGR:{content: "", styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C6,halign:'left' }},
        

        }] ,

    bodyStyles: {
        valign: 'middle',
        halign: 'left',
        font: 'proximaNova',
        cellPadding: 5,
        fontStyle: 'plain',
        fontSize: 10, //10
        lineWidth:0.,
        lineColor:[0,0,0],
        // fillColor:Color2,
        


    },willDrawCell: function (data) {

        const cell = data.cell;
        const doc = data.doc;
        const pageNumber = doc.internal.getNumberOfPages();
        const lines = data.cell.text;

        var lineWidth = 0.2;
        var lineColor = [0,0,0];
  
        doc.setLineWidth(lineWidth);
        doc.setDrawColor(...lineColor);
     
        if(cellcountA==5 ){
                var topLeft = [cell.x, cell.y]; 
                doc.setDrawColor(255, 215, 179);
                doc.setFillColor(255, 215, 179);
                doc.lines(
                    [
                            [cell.width, 0],    // to topRight  
                            [0,cell.height ],   // to bottomRight
                            [-cell.width,0],  // to bottomLeft
                            [0,-cell.height],  // back to topLeft
            
            
            
            
                        ],
                        topLeft[0],
                        topLeft[1],
                        [1, 1],
                        'FD',        // Fill and stroke
                        true         // Close path
                        );
                }else if(cellcountA==4){
                    var topLeft = [cell.x, cell.y]; 
                    doc.setDrawColor(255, 215, 179);
                    doc.setFillColor(255, 215, 179);
                    doc.lines(
                        [
                                [cell.width, 0],    // to topRight  
                                [0,cell.height ],   // to bottomRight
                                [-cell.width,0],  // to bottomLeft
                                [0,-cell.height],  // back to topLeft
                
                
                
                
                            ],
                            topLeft[0],
                            topLeft[1],
                            [1, 1],
                            'FD',        // Fill and stroke
                            true         // Close path
                            );
                }else if(cellcountA==3){
                    var topLeft = [cell.x-5, cell.y]; 
                    doc.setDrawColor(255, 215, 179);
                    doc.setFillColor(255, 215, 179);
                    doc.lines(
                        [
                                [cell.width+5, 0],    // to topRight  
                                [0,cell.height ],   // to bottomRight
                                [-cell.width-5,0],  // to bottomLeft
                                [-5,-cell.height],  // back to topLeft
                
                
                
                
                            ],
                            topLeft[0],
                            topLeft[1],
                            [1, 1],
                            'FD',        // Fill and stroke
                            true         // Close path
                            );
                }
               
              

                cellcountA++;
    },
    });
    var AfterTotalTab=doc.previousAutoTable.finalY;
    doc.setFillColor(...Color1); 
    doc.rect(0, AfterTotalTab, doc.internal.pageSize.width, doc.internal.pageSize.height, 'F'); 

}

function  InvoiceFooterTableBackgrounfColor(doc,data){

    // console.log("totalcellheight:-",totalcellheight);
    // console.log("lastTab:-",lastTab);

    if(totalcellheight+1<lastTab){
      
            //For Remaining BackgroundColor
            doc.autoTable({
                startY: totalcellheight,
                margin: {
                right: marginright,
                left: marginrleft,
                top: totalcellheight
                },
                theme: 'plain',
                body:[{ 
                        typeGL:{content: "", styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C1,halign:'left' }},
                        type1:{content: '', styles: { halign: 'left', font: 'proximaNova', fontStyle: 'italic', cellWidth:C2, }},
                        type2:{content: '', styles: { halign: 'center', font: 'proximaNovaBold', fontStyle: 'bold', cellWidth:C3 } },
                        type3:{content: '', styles: { halign: 'left', font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C4, } },
                        type4:{content: '', styles: { halign: 'center', font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C5 }, },
                        typeGR:{content: "", styles: {  font: 'proximaNovaBold', fontStyle: 'bold', cellWidth: C6,halign:'left' }},

                }] ,
            
                bodyStyles: {
                valign: 'middle',
                halign: 'left',
                font: 'proximaNova',
                cellPadding: 5,
                fontStyle: 'plain',
                lineWidth:0.,
                lineColor:[0,0,0],
                fillColor:Color1,
                minCellHeight: lastTab-totalcellheight //169.9
                },
            });
    }
    

}

    function Generateinvoice() {

     
        // var doc = new jsPDF('p'); // Create a new jsPDF instance

        var doc = new jsPDF({
          unit: 'mm', // Using millimeters as the unit
          format: 'a5' // Custom dimensions for A5 (width, height)
        });
       
       var copyName="ORIGINAL";
    //    doc.autoTableSetDefaults({
    //     didDrawPage: function (data) {
    //         // drawBackgroundAndHeader(doc);
    //     }
    // });
   
        InvoiceHeaderTable(doc, copyName,  data);
        InvoiceBodyTable(doc, copyName, data);
        InvoiceFooterTable(doc,data);




   //screen
    //    const pdfData = doc.output("datauristring");
    //    document.getElementById("pdf-preview").src = pdfData;
      doc.save("Invoice_" + ".pdf");
       
    }


function drawBackgroundAndHeader(doc){

    doc.setFillColor(...Color1); 
    doc.rect(0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, 'F'); 
}

        
    