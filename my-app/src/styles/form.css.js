import styled from "styled-components";

const css = {
    FormContainer: styled.div`
        display : flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        position:relative;
        width: 600px;
        height: auto;
        min-height: 80px;
        background-color: #white;
        margin: 40px auto 40px;
        padding: 30px;
        border-style: solid;
        border-width: 2px;
        border-color:rgb(229, 229, 229);
        border-radius: 6px;

    `,
    
    Input: styled.input`
        display:block;
        position:relative;
        width:100%;
        height:40px;
        outline:none;
        border:none;
        background-color: rgb(229, 229, 229);
        padding-left:14px;
        border-radius: 4px;
        margin-bottom: 10px;
        :last-child {
            margin-bottom: 0px;
        }
        
    `, 

    Button: styled.span`
        display:block;
        position:relative;
        width:220px;
        height:44px;
        line-height:42px;
        text-align:center;
        border: none;
        background-color: #E5E5E5;
        cursor:pointer;
        border-radius: 4px;
        &:hover {
            background-color: #B0F347;
          }
    `,

    Span: styled.span`
        display:block;
        position:relative;
        height:44px;
        line-height:42px;
        text-align:center;
        font-size: 16px;
        border: none;
    `

}

export default css