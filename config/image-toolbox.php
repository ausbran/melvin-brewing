<?php

return [
    'transformLayouts' => [
        'cans' => [
            'variants' => [
                [
                    'media' => '(max-width: 999px)',
                    'transform' => [
                        'width' => 300,
                        'mode' => 'crop',
                    ],
                ],
                [
                    'media' => '(min-width: 1000px)',
                    'transform' => [
                        'width' => 600,
                        'mode' => 'stretch',
                    ],
                ],
            ],
            'attributes' => [
                'class' => 'some-class',
            ],
        ],
    ],
];
