import React from "react";
import css from "../../../styles/styles.css";
import { ResponsivePie } from '@nivo/pie';

const {DataContainer} = css;

const MyResponsivePie = ({ data }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'Еда'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Транспорт'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Связь'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Бытовые товары'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Прочее'
                },
                id: 'lines'
            },
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 25,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)

const DataChart = () => {
    return (
        <>
            <DataContainer style={{height: "500px"}}>
                <MyResponsivePie data={
                    [
                        {
                          "id": "Еда",
                          "label": "Еда",
                          "value": 445,
                          "color": "hsl(69, 70%, 50%)"
                        },
                        {
                          "id": "Транспорт",
                          "label": "Транспорт",
                          "value": 131,
                          "color": "hsl(20, 70%, 50%)"
                        },
                        {
                          "id": "Связь",
                          "label": "Связь",
                          "value": 556,
                          "color": "hsl(271, 70%, 50%)"
                        },
                        {
                          "id": "Бытовые товары",
                          "label": "Бытовые товары",
                          "value": 528,
                          "color": "hsl(150, 70%, 50%)"
                        },
                        {
                          "id": "Прочее",
                          "label": "Прочее",
                          "value": 502,
                          "color": "hsl(217, 70%, 50%)"
                        }
                      ]
                }
                />
            </DataContainer> 
        </>
    )
}

export default DataChart