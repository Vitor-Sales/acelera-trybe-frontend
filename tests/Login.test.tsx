import React from 'react';
import { describe, expect, test } from 'vitest';
import {render, screen} from '@testing-library/react';
import Login from '../src/pages/Login';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Teste da tela dde Login', () => {
  test('Renderiza a tela de login corretamente', () => {
    // Arrange => Preparação
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )
    // Act => Ação
    const loginTitle = screen.getByText('Welcome');

    // Assert => Verificação
    expect(loginTitle).toBeInTheDocument();
  });
});