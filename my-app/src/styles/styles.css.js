import styled from "styled-components"

const css = {
    HeaderContainer: styled.header`
        display : flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        position:relative;
        width: 100%;
        height: 80px;
        background-color: #202634;
        padding: 0 30px;

    `,
    FooterContainer: styled.footer`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        position: relative;
        width: 100%;
        height: 80px;
        background-color: #E5E5E5;

    `,

    Button: styled.span`
        display: block;
        padding: 10px 14px 12px;
        borderRadius: 6px;
        background-color: #B0F347;
        cursor: pointer;
        margin-Left: 10px;
        border-radius: 5px;
        border-radius: 4px;
        &:hover {
            background-color: #E5E5E5;
          }
        
    `,

    DataContainer: styled.div`
        display : flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        position:relative;
        width: 800px;
        height: auto;
        min-height: 80px;
        background-color: #white;
        margin: 40px auto 40px;
        padding: 20px;
        border-style: solid;
        border-width: 2px;
        border-radius: 4px;
        border-color:rgb(229, 229, 229);
    `,

    HeaderCSS: {
        Logo: styled.div`
            font-size:34px;
            color: #B0F347
        `,
        MenuContainer: styled.div`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            position:relative;
        `
    }


}

export default css

