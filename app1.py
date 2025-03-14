from flask import Flask, request, render_template, url_for
import mysql.connector as mc

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('main.html')
def about():
    return render_template('about.html')
def contact():
    return render_template('contact.html')
def gaming():
    return render_template('gaming.html')
def homekitchen():
    return render_template('home&kitchen.html')
def homebu():
    return render_template('home button.html')
def home():
    return render_template('home.html')
def jewelery():
    return render_template('jewelery.html')
def mobiles():
    return render_template('mobiles.html')
def products():
    return render_template('products.html')
def mens():
    return render_template('trendy mens.html')
def women():
    return render_template('trendy women.html')
@app.route('/buy_now')
def buy_now():
    return render_template('buy now.html')

@app.route('/process_payment', methods=['POST'])
def process_payment():
    name = request.form['name']
    email = request.form['email']
    phone_number = request.form['phone']
    address = request.form['address']
    state = request.form['state']

    # Connect to the database
    conn = mc.connect(
        host='localhost',
        user='root',
        password='A14201514e*',
        database='shopping_website'
    )
    cursor = conn.cursor()

    # Insert data into the database
    query = "INSERT INTO customers (name, email, phone_number, address, state) VALUES (%s, %s, %s, %s, %s)"
    values = (name, email, phone_number, address, state)
    cursor.execute(query, values)
    conn.commit()

    cursor.close()
    conn.close()

    return 'Order placed successfully'

if __name__ == '__main__':
    app.run(debug=True)
