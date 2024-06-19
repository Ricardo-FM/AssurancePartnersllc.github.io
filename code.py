from PyPDF2 import PdfReader, PdfWriter 
from reportlab.lib.pagesizes import letter 
from reportlab.pdfgen import canvas 
from io import BytesIO


# Read the input PDF 
input_pdf_path = "ASSURANCE_PARTNERS.pdf" reader = PdfReader(input_pdf_path) writer = PdfWriter() 
# Create a canvas to draw the new contact information 
packet = BytesIO() can = canvas.Canvas(packet, pagesize=letter) can.drawString(72, 720, "Point of Contact:") can.drawString(72, 700, "Billy Aumand") can.drawString(72, 680, "Cell: 410-610-4897") can.drawString(72, 660, "Email: billy@assurancepartnersllc.com") can.save() 
# Move to the beginning of the StringIO buffer 
packet.seek(0) new_pdf = PdfReader(packet) 
# Replace the contact information on the relevant page 
for page_num in range(len(reader.pages)): page = reader.pages[page_num] if "Point of Contact:" in page.extract_text(): page.merge_page(new_pdf.pages[0]) writer.add_page(page) 
# Write the output PDF 
output_pdf_path = "ASSURANCE_PARTNERS_SMART_SERVICES.pdf" with open(output_pdf_path, "wb") as output_pdf: writer.write(output_pdf) print(f"PDF saved as {output_pdf_path}")