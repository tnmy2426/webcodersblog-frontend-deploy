import React from "react";
import ContactItem from "../../components/ContactItems/ContactItem";
import Title from "../../components/PageTitle/Title";
import "./Contact.scss";
import { MdPhoneInTalk, MdLocationOn, MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section className='ContactPage'>
      <Title pageTitle='Contact me' />

      <div className='contact_content'>
        <div className='map_section'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7304.066638831774!2d90.34264682656185!3d23.746191208898427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf71ee167027%3A0x4f93f9bc959452bc!2sBoshila!5e0!3m2!1sen!2sbd!4v1617655000109!5m2!1sen!2sbd'
            width='600'
            height='450'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
          ></iframe>
        </div>

        <div className='contact_data'>
          <ContactItem
            icon={<MdPhoneInTalk />}
            title='Mobile No:'
            text='+880 1312898200'
          />
          <ContactItem
            icon={<MdEmail />}
            title='Email:'
            text='al.nahdi.tnmy@gmail.com'
          />
          <ContactItem
            icon={<MdLocationOn />}
            title='Address:'
            text='Boshila, Mohammadpur, Dhaka'
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
