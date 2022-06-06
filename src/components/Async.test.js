import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First post' }],
    });
    //fetch 함수의 다양한 결과를 제어해서 다양한 시나리오를 시험해볼 수 있다.
    // 이런경우 mock 쓰는게 나쁘지않다.

    render(<Async />);
    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
});

// 비동기작업이라 테스트 실패
// 초기 렌더사이클에는 리스트아이템이 없음
// 해결법 getAllByRole -> findAllByRole
// find 쿼리는 프로미스를 반환함, http요청이 성공할때까지 기다림
// 세번째 인자 타임아웃 디폴트는 1초  기본값으로 충분
